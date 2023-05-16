import { PropsWithChildren } from 'react'
import { Roboto, Baloo_2 } from 'next/font/google'

import '@/shared/styles/globals.css'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { IconButton } from '@/components/ui/IconButton'
import { Text } from '@/components/ui/Text'
import { ShoppingCart, MapPin } from '@/components/ui/icons'

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
      <body className={`${roboto.variable} ${baloo2.variable} box-border`}>
        <header className="w-screen py-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Image
              src={logo}
              width={85}
              height={40}
              alt="Logo Coffe Delivery"
            />

            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-between gap-2 rounded-md bg-purple-light p-2">
                <MapPin
                  className="text-purple-base"
                  weight="fill"
                  width={22}
                  height={22}
                />
                <Text className="text-purple-dark" size="sm">
                  Maringá, PR
                </Text>
              </div>

              <IconButton color="yellow">
                <ShoppingCart weight="fill" />
              </IconButton>
            </div>
          </div>
        </header>

        <main className="w-screen ">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </body>
    </html>
  )
}
