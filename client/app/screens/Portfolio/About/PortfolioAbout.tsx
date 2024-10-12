import Image from 'next/image'
import React from 'react'
import {  BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioMap from './PortfolioAboutMap'

const PortfolioAbout = () => {

    const arrowClickHandle = () => {
        location.href = '#portfolio'
    }

    return (
        <section id='about-me' className='w-full min-h-screen mt-16 text-black dark:text-teal-600 relative '>


            <p className="text-center">Get To Know More</p>


            <h1 className="text-center text-5xl">About Me</h1>


            <div className="gap-40 flex  items-center justify-center mt-4">


                <div className="flex max-w-[400px] max-h-[400px] items-center justify-center sm:hidden md:hidden lg:hidden xl:hidden">

                    <Image src={"/about-me.jpeg"} alt='about-me' width={400} height={400} className=' rounded-[2rem]  min-w-[400px] min-h-[400px]' />

                </div>


                <div className="justify-center flex-col ">


                    <PortfolioMap />


                    <div className="text-justify sm:text-xs p-2.5">
                        <p>
                            Proficient in clear communication,
                            analytical thinking, and technical
                            documentation. Leveraging strong
                            research skills and attention to
                            detail to excel in problem-solving
                            and code development. Passionate about
                            combining creativity with logic to
                            create innovative software solutions.
                        </p>
                    </div>


                </div>

            </div>
        </section>

    )
}

export default PortfolioAbout