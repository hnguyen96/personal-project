"use client"

import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion"

function About() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className='mt-7 mx-10 md:mx-16 xl:mx-60'>
            <div className="flex flex-col items-center md:flex-row text-[#cccccc]">
                <div className='md:mr-12 lg:mr-28 group '>

                    <p className="relative  w-fit mb-4">
                        <span className='font-semibold text-center sm:text-left text-2xl text-[#ce9c4b]'>About me</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-[#ce9c4b] group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-[#ce9c4b] group-hover:w-1/2 group-hover:transition-all"></span>
                    </p>

                    <p className='mb-4 text-justify'>Hey, my name is Nam. I am from Hanoi, Vietnam and currently living in Canada.
                    </p>

                    <p className='mb-4 text-justify'>I'm fueled by a passion for innovation and stay on the pulse of the latest trends in web development. Whether it's sleek UI designs, responsive layouts, or cutting-edge technologies, I'm always eager to push the boundaries.
                    </p>


                    <motion.ul initial="hidden" animate="visible" variants={container}>
                        <div className="flex justify-center gap-6 my-10">
                            <motion.li variants={item}>
                                <Image
                                    src="/icons/about/tech/typescript.png"
                                    width={35}
                                    height={35}
                                    alt="Typescript logo"
                                />
                            </motion.li>

                            <motion.li variants={item}>
                                <Image
                                    src="/icons/about/tech/react.png"
                                    width={35}
                                    height={35}
                                    alt="React logo"
                                />
                            </motion.li>

                            <motion.li variants={item}>
                                <Image
                                    src="/icons/about/tech/next.svg"
                                    width={35}
                                    height={35}
                                    alt="Nextjs logo"
                                />
                            </motion.li>

                            <motion.li variants={item}>
                                <Image
                                    src="/icons/about/tech/tailwind.png"
                                    width={45}
                                    height={10}
                                    alt="Tailwind logo"
                                />
                            </motion.li>
                        </div>
                    </motion.ul>
                </div>

                <div>
                    <Image className='w-auto'
                        src="/nam.png"
                        width={900}
                        height={900}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default About;