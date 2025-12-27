'use client'

import { useEffect } from 'react'
import { NotFoundContent } from '@/components/not-found-content'

export default function AppError({
  error,
  reset,
}: {
  error: globalThis.Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <NotFoundContent
      title="Something Went Wrong"
      description="An unexpected error occurred. Don't worry, we're working on it!"
      backText="Try Again"
      onBack={reset}
    />
  )
}