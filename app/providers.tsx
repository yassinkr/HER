'use client'

import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize database on client side
    fetch('/api/init-db').catch(console.error)
  }, [])

  return <SessionProvider>{children}</SessionProvider>
}