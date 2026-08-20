const SITE_URL = 'https://tapseedpayments.com'

const ensureMeta = (attr, key, content) => {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const ensureLink = (rel, href) => {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Update document title and common SEO meta tags for SPA routes.
 */
export const setPageMeta = ({
  title,
  description,
  path = '/',
  image = `${SITE_URL}/tapseed-payments-share.png`,
  noIndex = false,
}) => {
  const fullTitle = title.includes('Tapseed')
    ? title
    : `${title} | Tapseed Payments`
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

  document.title = fullTitle

  ensureMeta('name', 'description', description)
  ensureMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow')

  ensureLink('canonical', url)

  ensureMeta('property', 'og:title', fullTitle)
  ensureMeta('property', 'og:description', description)
  ensureMeta('property', 'og:url', url)
  ensureMeta('property', 'og:image', image)
  ensureMeta('property', 'og:type', 'website')

  ensureMeta('name', 'twitter:card', 'summary_large_image')
  ensureMeta('name', 'twitter:title', fullTitle)
  ensureMeta('name', 'twitter:description', description)
  ensureMeta('name', 'twitter:image', image)

  document.documentElement.setAttribute('data-meta-ready', 'true')
}

export const HOME_META = {
  title: 'Tapseed Payments | Payment Gateway for Africa',
  description:
    "Tapseed Payments enables seamless collections and payouts across Africa — cards, mobile money, and bank transfers for websites, apps, marketplaces, and fintechs.",
  path: '/',
}

export default setPageMeta
