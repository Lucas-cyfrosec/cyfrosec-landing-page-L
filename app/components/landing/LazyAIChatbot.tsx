'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const AIChatbot = dynamic(() => import('./AIChatbot'), {
  ssr: false,
  loading: () => null,
})

export default function LazyAIChatbot() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), 1200)
    return () => window.clearTimeout(timeout)
  }, [])

  return ready ? <AIChatbot /> : null
}
