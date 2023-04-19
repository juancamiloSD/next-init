import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { MainLayout } from '../../components/layouts/MainLayout';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <MainLayout>
      <Navbar />

      <h1>Contact Page</h1>
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
            <code className={"code"}>pages/contact/index.tsx</code>
          </p>
        </div>
      </main>
    </MainLayout>
  )
}
