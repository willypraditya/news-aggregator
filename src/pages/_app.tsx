import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

import '@/styles/globals.css'
import theme from '@/styles/theme'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
