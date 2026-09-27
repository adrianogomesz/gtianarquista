import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GTI Anarquista',
  description: 'Guild independente de Thetford para jogadores que pensam diferente. PvP Small Scale, Guerra de Facções, Avalon e mais.',
  generator: 'Next.js',
  icons: {
    // Apontamos diretamente para o emblema que você já tem na pasta public
    icon: '/thetfordfavicon.png',
    apple: '/thetfordfavicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0b0a0f' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0a0f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}