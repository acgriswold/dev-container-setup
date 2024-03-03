import { siteConfig } from '@/config/site'
import '@/styles/globals.css'
import { sans } from '@/lib/font'

export const metadata = {
  metadataBase: siteConfig.metadataBase,
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.variable}>{children}</body>
    </html>
  )
}
