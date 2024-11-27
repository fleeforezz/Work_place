import localFont from "next/font/local";
import "./globals.css";

const PublicSans = localFont({
  src: [
    {
      path: './fonts/PublicSans-ThinItalic.woff',
      weight: '200',
      style: 'extralight',
    },
    {
      path: './fonts/PublicSans-Thin.woff',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/PublicSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PublicSans-Medium.woff',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/PublicSans-SemiBold.woff',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/PublicSans-Bold.woff',
      weight: '700',
      style: 'bold',
    },
  ]
});

export const metadata = {
  title: 'Nhat | Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="any" href="/avatar.JPG" />
      </head>
      <body
        className={`${PublicSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
