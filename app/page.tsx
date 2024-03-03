import { H1 } from "@/components/typeography"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
        <H1 className='container flex items-center justify-center font-bold'>dev-container-setup</H1>
    </main>
  )
}
