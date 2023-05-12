import { PropsWithChildren } from 'react'
import { Roboto, Baloo_2 } from 'next/font/google'

import '@/shared/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo2',
  display: 'swap',
})

export const metadata = {
  title: 'Coffe Delivery',
  description: 'An application that delivers coffee',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${baloo2.variable}`}>
        {children}
      </body>
    </html>
  )
}
