import { Button } from '@/components/Button'
import { CirclesBackground } from '@/components/CirclesBackground'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
        <CirclesBackground color="#d62976" className="absolute left-1/2 top-1/2 -z-10 mt-44 w-[68.125rem] -translate-x-1/2 -translate-y-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />
        <p className="text-sm font-sans font-semibold text-white">404</p>
        <h1 className="mt-2 text-3xl font-sans tracking-tight text-white">
          Page not found
        </h1>
        <p className="mt-2 text-lg text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" variant="outline" className="mt-8 text-white hover:bg-[#d62976]">
          Go back home
        </Button>
      </Container>
    </Layout>
  )
}
