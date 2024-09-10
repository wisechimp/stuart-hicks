import type { Metadata } from 'next'
import GoogleAnalytics from '../components/google-analytics'

export const metadata: Metadata = {
  title: 'Stuart Hicks - Frontend Dev',
  description:
    'Portfolio website demonstrating the frontend web development experience of Stuart Hicks.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <div id="root">{children}</div>
    </html>
  )
}

export default RootLayout
