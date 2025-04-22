import { cn } from '@ymd/ui/lib/utils'
import { Geist, Geist_Mono } from 'next/font/google'

import { Providers } from '@/components/providers'
import { type AppChildren } from '@/lib'

import '@ymd/ui/globals.css'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})

const RootLayout = ({ children }: Readonly<AppChildren>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, fontMono.variable, 'font-sans', 'antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
