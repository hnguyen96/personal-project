import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-serif justify-between text-secondary-content bg-base-200">
      <Header />
      <div className="hero flex-grow bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi. I'm Nam</h1>
            <div className="badge badge-lg badge-accent mx-auto mt-3">Web Developer</div>

            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
