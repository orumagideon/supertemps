import { useEffect } from 'react'

function SeoTitle({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Supertemps International Ltd`
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

export default SeoTitle
