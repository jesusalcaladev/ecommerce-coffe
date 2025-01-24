'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { ThemeProvider } from './theme-provider'

const queryClient = new QueryClient()

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  )
}
