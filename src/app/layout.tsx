import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'NXAI - AI-Powered Blockchain Prediction Platform',
  description: 'NXAI seamlessly integrates advanced artificial intelligence with blockchain technology to revolutionize prediction markets.',
  keywords: 'AI, blockchain, prediction markets, crypto, machine learning, decentralized finance',
  openGraph: {
    title: 'NXAI - AI-Powered Blockchain Prediction Platform',
    description: 'NXAI seamlessly integrates advanced artificial intelligence with blockchain technology to revolutionize prediction markets.',
    url: 'https://www.nxaiagent.xyz',
    siteName: 'NXAI',
    images: [
      {
        url: 'https://www.nxaiagent.xyz/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NXAI Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NXAI - AI-Powered Blockchain Prediction Platform',
    description: 'NXAI seamlessly integrates advanced artificial intelligence with blockchain technology to revolutionize prediction markets.',
    creator: '@NX_AI_',
    images: ['https://www.nxaiagent.xyz/images/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 