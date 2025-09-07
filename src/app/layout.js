import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Piyush Prakhar - Full Stack Developer',
  description: 'Portfolio of Piyush Prakhar - MERN Stack Developer specializing in modern web technologies',
  keywords: 'Piyush Prakhar, Full Stack Developer, MERN Stack, React, Node.js, Portfolio',
  authors: [{ name: 'Piyush Prakhar' }],
  creator: 'Piyush Prakhar',
  publisher: 'Piyush Prakhar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}