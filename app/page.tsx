import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AnimatedTitle from '@/components/animations/animatedTitle'
import PageTransition from '@/components/animations/pageTransition'
import SparklesInstance from '@/components/animations/sparkleAnimation/sparkles'

function Home() {
  const title = "Nam Nguyen"
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center font-serif justify-between text-secondary-content bg-home bg-cover">
        <Header />
        <SparklesInstance children={
          <div className="hero flex-grow">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <AnimatedTitle text={title} />

                <div className="badge badge-lg badge-accent mt-4 text-[#ce9c4b]">Front-end Developer</div>

                <p className="py-6">A passionate developer dedicated to build clean and functional web designs that is interactive and user-friendly. Let's build something amazing together!</p>

                <button className="btn relative overflow-hidden text-[#ce9c4b] shadow-xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:bg-neutral before:duration-300 before:ease-out hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                  <span className="relative">Contact me</span>
                </button>
              </div>
            </div>
          </div>
        }></SparklesInstance>
        <Footer />
      </main>
    </PageTransition>
  )
}

export default Home;