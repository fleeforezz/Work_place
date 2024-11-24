import './globals.css'
import localFont from 'next/font/local'

const chillax = localFont({
  src: [
    {
      path: './fonts/Chillax-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Chillax-Medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/Chillax-Semibold.woff',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/Chillax-Bold.woff',
      weight: '700',
      style: 'bold',
    },
  ]
})

export const metadata = {
  title: 'Nhat | Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="any" href="/avatar.jpg" />
      </head>
      <body className={chillax.className}>
        {/* <svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg' id='noise'>
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='4.75'
              numOctaves='1'
              stitchTiles='stitch' />
          </filter>

          <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg> */}
        {children}
      </body>
    </html>
  )
}
