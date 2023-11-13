import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className="flex mx-60">

            <div className='mr-28'>
                <p className='pb-7 font-semibold text-2xl text-[#ce9c4b]'>ABOUT ME</p>

                <p className='mb-5 text-lg'>Hey, this is Nam. I am from Hanoi, Vietnam and currently living in Canada.</p>

                <p className='text-lg'> I am a Web Developer with a Diploma in Computer Studies
                    from Langara College in 2022.
                    Mainly focusing on web development, I have good understanding and can work both front end and
                    back-end roles</p>

                <div className='flex gap-5'>
                    <Link href="https://github.com/hnguyen96">
                        <Image
                            src="/icons/github.svg"
                            width={25}
                            height={25}
                            alt="Github logo"
                        />
                    </Link>

                    <Link href="mailto:hoangnamngx882@gmail.com">
                        <Image
                            src="/icons/mail.svg"
                            width={25}
                            height={25}
                            alt="Mail logo"
                        />
                    </Link>
                </div>

            </div>
            <Image
                    src="/nam.png"
                    width={400}
                    height={400}
                    alt=""
                />
        </div>
    )
}