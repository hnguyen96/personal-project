import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className="md:flex md:items-center mx-10 sm:mx-24 xl:mx-60  text-[#b3b3b3]">
            <div className='mb-5 md:mr-12 lg:mr-28 '>
                <p className='pb-5 font-semibold text-center sm:text-left text-2xl text-[#ce9c4b]'>ABOUT ME</p>

                <p className='mb-5'>Hey, this is Nam. I adwadwam from Hanoi, Vietnam and currently living in Canada.</p>

                <p className=''> I am a Web Developer with a Diploma in Computer Studies
                    from Langara College in 2022.fwafwafawfef
                    Mainly focusing on web development, I have good understanding and can work both front end and
                    back-end roles</p>
            </div>

            <Image className='max-w-full h-auto'
                src="/nam.png"
                width={400}
                height={400}
                alt=""
            />
        </div>
    )
}