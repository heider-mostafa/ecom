'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'

export function GoogleTagManager() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: 'pageview',
          page: url,
        })
      }
    }

    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`
    handleRouteChange(url)

    // Check if it's a product page and reload if necessary
    if (pathname.startsWith('/product/') && !window.location.href.includes('reloaded=true')) {
      window.location.href = `${window.location.href}${window.location.href.includes('?') ? '&' : '?'}reloaded=true`
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3KDKXZW');
          `,
        }}
      />
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-N3KDKXZW"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
  )
}
