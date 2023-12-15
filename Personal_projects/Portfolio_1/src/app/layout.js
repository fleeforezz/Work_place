import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nhat Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel="icon" href="/favicon.ico\"/>
      </head>
      <body className='bg-white font-[inter] scroll-smooth overflow-x-hidden'>
        <div id='stars-1'></div>
        <div id='stars-2'></div>
        <div id='stars-3'></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
