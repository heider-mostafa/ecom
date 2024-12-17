'use client'

import { useEffect, Suspense } from 'react'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function GoogleTagManagerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    const handleRouteChange = (url: string) => {
      window.dataLayer.push({
        event: 'page_view',
        page_location: url,
        page_title: document.title,
      })
    }

    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`
    handleRouteChange(url)

    // Check if it's a product page and reload if necessary
    if (pathname.startsWith('/product/') && !window.location.href.includes('reloaded=true')) {
      window.location.href = `${window.location.href}${window.location.href.includes('?') ? '&' : '?'}reloaded=true`
    }
  }, [pathname, searchParams])

  return null
}

export function GoogleTagManager() {
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

            // Initialize dataLayer
            window.dataLayer = window.dataLayer || [];
            
            // Debug function to log all dataLayer pushes
            const originalPush = Array.prototype.push;
            window.dataLayer.push = function() {
              console.log('DataLayer Push:', ...arguments);
              return originalPush.apply(this, arguments);
            };
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
      <Suspense fallback={null}>
        <GoogleTagManagerInner />
      </Suspense>
    </>
  )
}

// Helper functions for ecommerce events
export function viewItem(item: any) {
  if (typeof window === 'undefined') return;
  
  console.log('Triggering view_item event');
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
  window.dataLayer.push({
    event: "view_item",
    ecommerce: {
      currency: "USD",
      value: item.price,
      items: [{
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: 1
      }]
    }
  });
}

export function addToCart(item: any, quantity: number) {
  if (typeof window === 'undefined') return;
  
  console.log('Triggering add_to_cart event');
  window.dataLayer = window.dataLayer || [];
  
  // First, clear the previous ecommerce object
  window.dataLayer.push({ ecommerce: null });
  
  // Then, push the add_to_cart event
  const eventData = {
    event: "add_to_cart",
    ecommerce: {
      currency: "USD",
      value: item.price * quantity,
      items: [{
        item_id: item.id,
        item_name: item.name,
        item_category: "Lip Gloss",
        price: item.price,
        quantity: quantity
      }]
    }
  };
  
  console.log('Pushing add_to_cart event with data:', eventData);
  window.dataLayer.push(eventData);
}

export function beginCheckout(items: any[]) {
  if (typeof window === 'undefined') return;
  
  console.log('Triggering begin_checkout event');
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: "begin_checkout",
    ecommerce: {
      currency: "USD",
      value: items.reduce((total, item) => total + item.price * item.quantity, 0),
      items: items.map(item => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    }
  });
}

export function purchase(transactionId: string, items: any[]) {
  if (typeof window === 'undefined') return;
  
  console.log('Triggering purchase event');
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: "purchase",
    ecommerce: {
      transaction_id: transactionId,
      currency: "USD",
      value: items.reduce((total, item) => total + item.price * item.quantity, 0),
      items: items.map(item => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    }
  });
}




