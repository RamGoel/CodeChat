"use client";
import Loader from '@/components/loader/loader.component'
import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/redux/Provider'
import localFont from 'next/font/local'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import Head from 'next/head';
const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Thin.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
})


export default function RootLayout({
  children,
  pageProps
}: {
  children: React.ReactNode,
  pageProps: {
    session: Session
  }
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} bg-black`}>
        <Head>
          <title>CoChat | Code & Collab</title>
        </Head>
        <Providers>
          <Loader />
          <SessionProvider {...pageProps}>
            {children}
          </SessionProvider>
        </Providers>

      </body>
    </html>

  )
}