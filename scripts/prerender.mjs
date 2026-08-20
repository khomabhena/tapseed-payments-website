import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '../dist')
const PORT = 4179
const ORIGIN = `http://127.0.0.1:${PORT}`

const ROUTES = [
  '/',
  '/privacy-policy',
  '/terms-and-conditions',
  '/refund-policy',
  '/acceptable-use-policy',
  '/prohibited-businesses',
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.map': 'application/json',
}

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0])
  const candidates = [
    path.join(DIST, clean),
    path.join(DIST, clean, 'index.html'),
  ]

  if (clean === '/' || clean === '') {
    candidates.unshift(path.join(DIST, 'index.html'))
  }

  for (const candidate of candidates) {
    if (existsSync(candidate) && statSync(candidate).isFile()) {
      return candidate
    }
  }

  // SPA fallback while prerendering nested routes that don't exist yet
  return path.join(DIST, 'index.html')
}

function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const filePath = resolveFile(req.url || '/')
      const ext = path.extname(filePath).toLowerCase()
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' })
      createReadStream(filePath).pipe(res)
    })

    server.listen(PORT, '127.0.0.1', () => resolve(server))
  })
}

function outPathForRoute(route) {
  if (route === '/') return path.join(DIST, 'index.html')
  const folder = path.join(DIST, route.replace(/^\//, ''))
  return path.join(folder, 'index.html')
}

async function prerender() {
  if (!existsSync(DIST)) {
    throw new Error('dist/ not found. Run vite build first.')
  }

  const server = await startStaticServer()
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  console.log(`Prerendering ${ROUTES.length} routes via ${ORIGIN}`)

  for (const route of ROUTES) {
    const url = `${ORIGIN}${route}`
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.waitForSelector('html[data-meta-ready="true"]', { timeout: 15000 })
    await new Promise((r) => setTimeout(r, 300))

    const html = await page.content()
    const target = outPathForRoute(route)
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, html, 'utf8')
    console.log(`  ✓ ${route} -> ${path.relative(DIST, target)}`)
  }

  await browser.close()
  server.close()
  console.log('Prerender complete.')
}

prerender().catch((err) => {
  console.error(err)
  process.exit(1)
})
