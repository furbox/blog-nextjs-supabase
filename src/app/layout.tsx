import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News Posts Social Business',
  description: 'Social Business News Posts'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
