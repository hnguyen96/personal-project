import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className='mt-7 mx-10 md:mx-16 xl:mx-60'>
            <div className="flex flex-col items-center md:flex-row text-[#cccccc]">
                <div className='md:mr-12 lg:mr-28 '>
                    <p className='pb-5 font-semibold text-center sm:text-left text-2xl text-[#ce9c4b] underline underline-offset-4'>ABOUT ME</p>

                    <p className='mb-4'>Hey, my name is Nam. I am from Hanoi, Vietnam and currently living in Canada.
                    </p>

                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non lacus non lorem ornare accumsan. Pellentesque ut dignissim nisl. Integer iaculis magna sed quam faucibus ultrices. Cras id arcu eu lacus rhoncus dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </p>

                    <div className="flex justify-center gap-6 my-10">
                        <Image
                            src="/icons/about/tech/typescript.png"
                            width={35}
                            height={35}
                            alt="Typescript logo"
                        />

                        <Image
                            src="/icons/about/tech/react.png"
                            width={35}
                            height={35}
                            alt="React logo"
                        />

                        <Image className=''
                            src="/icons/about/tech/next.svg"
                            width={35}
                            height={35}
                            alt="Nextjs logo"
                        />

                        <Image
                            src="/icons/about/tech/tailwind.png"
                            width={45}
                            height={10}
                            alt="Tailwind logo"
                        />
                    </div>
                </div>

                <Image className='max-w-full h-auto'
                    src="/nam.png"
                    width={300}
                    height={300}
                    alt=""
                />

            </div>

            {/* <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">This is the title</div>
                    <div className="stat-value">12312</div>
                    <div className="stat-desc">OMG that is impressive</div>
                </div>

            </div> */}
        </div>
    )
}