import Image from 'next/image'
import React from 'react'
import Button from '../../btnComponent/Button'
import { BiLogoGithub, BiLogoLinkedin, BiSolidArrowFromTop } from 'react-icons/bi'

const PortfolioHero = () => {

    const gitClickHandle = () => {
        location.href = 'https://github.com/KamiNation'
    }

    const linkedinClickHandle = () => {
        location.href = 'https://www.linkedin.com/in/israel-adedamola-606373139/'
    }

    const arrowClickHandle = () => {
        location.href = '#about-me'
    }





    return (
        <section id='portfolio' className='w-full min-h-screen flex  gap-40 mt-4 items-center justify-center text-black dark:text-teal-600 relative'>

            <div className='max-w-[400px] max-h-[400px] flex items-center justify-center'>
                <Image src={"/kami.jpg"} alt='Israel' width={400} height={400} className='rounded-[50%] min-w-[400px] min-h-[400px]' />
            </div>



            <div className='flex-col h-[20vh] self-center text-center gap-8'>

                <p className="text-black dark:text-teal-600 text-center">Hello, I'm</p>

                <h1 className="text-black dark:text-teal-600 text-5xl">Israel Adedamola</h1>

                <p className="text-black dark:text-teal-600 text-2xl">Software Developer | Technical writer</p>


                <div className="flex justify-center gap-4">
                    <Button className="text-black dark:text-teal-600 font-semibold p-4  hover:dark:text-red-600 hover:text-teal-600" >
                        Download CV
                    </Button>

                    <Button className="text-black dark:text-teal-600 font-semibold p-4  hover:dark:text-red-600 hover:text-teal-600" >
                        Contact Me
                    </Button>
                </div>

                <div className="flex justify-center gap-4">
                    <BiLogoLinkedin className='pointer h-8 hover:dark:text-red-600 hover:text-teal-600' onClick={() => linkedinClickHandle()} />
                    <BiLogoGithub className='pointer h-8 hover:dark:text-red-600 hover:text-teal-600' onClick={() => gitClickHandle()} />
                </div>
            </div>

            <BiSolidArrowFromTop className="absolute -right-5 bottom-10 pointer h-8" onClick={() => arrowClickHandle()} />

        </section>
    )
}

export default PortfolioHero