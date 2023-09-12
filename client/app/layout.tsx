import Loader from '@/components/loader/loader.component'
import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/redux/Provider'
import localFont from 'next/font/local'
import { useEffect } from 'react'
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
export const metadata: Metadata = {
  title: 'CodeChat',
  description: 'A revloutionized code editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  useEffect(() => {
    
  },[])
  return (
      <html lang="en">
      <body className={`${gilroy.className} bg-black`}>
        <Providers>
        <Loader />
        {children}
        </Providers>
      </body>
      </html>
 
  )
}
