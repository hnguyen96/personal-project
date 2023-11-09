import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-serif justify-between text-secondary-content bg-sky bg-cover">
      <Header />
      <div className="hero flex-grow">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi. I'm Nam</h1>
            <div className="badge badge-lg badge-accent mt-4 text-[#ce9c4b]">Front-end Developer</div>

            <p className="py-6">eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className="btn glass">Contact me</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
