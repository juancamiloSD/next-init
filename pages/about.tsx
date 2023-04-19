import { Navbar } from '@/components/Navbar'
import { MainLayout } from '../components/layouts/MainLayout';
import Image from 'next/image';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function AboutPage() {
  return (
    <>
        <Navbar />

        <h1>About Page</h1>
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
              <code className={"code"}>pages/about.tsx</code>
            </p>
          </div>
        </main>
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
