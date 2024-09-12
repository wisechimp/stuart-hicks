import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Stuart Hicks - Frontend Dev',
  description:
    'Portfolio website demonstrating the frontend web development experience of Stuart Hicks.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID} />
    </html>
  )
}

export default RootLayout
