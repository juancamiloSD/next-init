import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'

export default function PricingPage() {

  return (
    <MainLayout>
      <Navbar />

      <h1>Pricing Page</h1>
      <div className={"center"}>
          <Image
            className="logo"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
      </div>
      <main className={"main"}>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/pricing.tsx</code>
          </p>
        </div>
      </main>
    </MainLayout>
  )
}
