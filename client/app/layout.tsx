import Loader from '@/components/loader/loader.component'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/redux/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CodeChat',
  description: 'A revloutionized code editor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <>
        <Loader />
        {children}
          </>
        </ReduxProvider>
      </body>
      </html>
 
  )
}
