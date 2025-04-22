'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { type AppChildren } from '@/lib'

export const Providers = ({ children }: AppChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
      {children}
    </NextThemesProvider>
  )
}
