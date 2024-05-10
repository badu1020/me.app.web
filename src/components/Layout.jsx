import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export function Layout({ children }) {
  return (
    <>
    <html className={clsx('bg-gray-50 antialiased', inter.variable)} style={{scrollBehavior:'smooth'}} >
    <body className='bg-black'>
      <Header />
      <main className="flex-auto bg-black">{children}</main>
      <Footer />
      </body>
    </html>
    </>
  )
}
