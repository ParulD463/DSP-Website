import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';``
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UCSC_DSP',
  description: 'Delta Sigma Pi | ΠΧ UC Santa Cruz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Lato:100,200,300,400,700' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
