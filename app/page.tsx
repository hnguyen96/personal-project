import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-accent">
      <Header />


      <Footer />
    </main>
  )
}
