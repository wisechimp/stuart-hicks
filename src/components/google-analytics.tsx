import Script from 'next/script'

const GoogleAnalytics = () => {
  const googleMeasurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleMeasurementId}`}
      />
    </>
  )
}

export default GoogleAnalytics
