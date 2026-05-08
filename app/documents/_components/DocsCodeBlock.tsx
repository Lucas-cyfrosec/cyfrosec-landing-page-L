'use client'

import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'

type DocsCodeBlockProps = {
  code: string
  label?: string
  className?: string
}

export default function DocsCodeBlock({
  code,
  label,
  className = 'mb-5',
}: DocsCodeBlockProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeout = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={`rounded-xl border cy-border-default overflow-hidden ${className}`}>
      {label ? (
        <div
          className="flex items-center justify-between gap-3 px-4 py-2 border-b cy-border-default"
          style={{ background: 'var(--bg-canvas)' }}
        >
          <span className="text-xs font-mono cy-text-muted">{label}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-md border cy-border-default px-2.5 py-1 text-[11px] font-medium cy-text-secondary transition hover:cy-text-primary hover:bg-white/5"
            aria-label={`Copy ${label} code`}
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      ) : (
        <div
          className="flex justify-end border-b cy-border-default px-4 py-2"
          style={{ background: 'var(--bg-canvas)' }}
        >
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded-md border cy-border-default px-2.5 py-1 text-[11px] font-medium cy-text-secondary transition hover:cy-text-primary hover:bg-white/5"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
      <pre
        className="p-4 text-sm font-mono cy-text-primary overflow-x-auto leading-relaxed"
        style={{ background: 'var(--bg-canvas)' }}
      >
        {code}
      </pre>
    </div>
  )
}
