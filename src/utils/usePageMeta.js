import { useLayoutEffect } from 'react'
import setPageMeta from './setPageMeta'

/**
 * Apply SEO meta during layout so prerender captures title/description/canonical.
 */
export const usePageMeta = (meta) => {
  useLayoutEffect(() => {
    setPageMeta(meta)
  }, [meta.title, meta.description, meta.path, meta.image, meta.noIndex])
}

export default usePageMeta
