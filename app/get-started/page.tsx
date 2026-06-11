'use client'

import { useEffect } from 'react'

const target = `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.cyfrosec.com'}/get-started`

export default function GetStartedRedirect() {
  useEffect(() => {
    window.location.replace(target)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-900">
      <p className="text-sm text-surface-500">Redirecting…</p>
    </div>
  )
}
