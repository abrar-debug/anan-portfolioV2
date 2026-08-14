import { Suspense, lazy } from 'react'

const EmbeddedSanityStudio = lazy(async () => {
  const mod = await import('./EmbeddedSanityStudio')
  return { default: mod.EmbeddedSanityStudio }
})

export function SanityStudioRoute() {
  return (
    <div className="sanity-studio-root">
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            Loading Sanity Studio…
          </div>
        }
      >
        <EmbeddedSanityStudio />
      </Suspense>
    </div>
  )
}
