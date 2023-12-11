import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AnimatedTitle from '@/components/animations/animatedTitle'
import Image from 'next/image'

export default function Home() {
  const title = "Nam Nguyen"
  return (
    <main className="flex min-h-screen flex-col items-center font-serif justify-between text-secondary-content bg-home bg-cover">
      <Header />
      <div className="hero flex-grow">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <AnimatedTitle text={title}/>
            <div className="badge badge-lg badge-accent mt-4 text-[#ce9c4b]">Front-end Developer</div>

            <p className="py-6">eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <button className="btn relative overflow-hidden text-[#ce9c4b] shadow-xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:bg-neutral before:duration-300 before:ease-out hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
              <span className="relative">Contact me</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
