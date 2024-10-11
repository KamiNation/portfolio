import React from 'react'
import PortfolioContactMap from './PortfolioContactMap'

const PortfolioContact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section id='contact' className='w-full min-h-[50vh] mt-4  text-black dark:text-teal-600 relative'>
            <p className="text-center">Get in Touch</p>
            <h1 className="text-center text-5xl">Contact Me</h1>
            <div className="flex justify-center rounded-[2rem] my-8 mx-auto p-2 sm:flex-wrap md:flex-wrap ">
                <PortfolioContactMap />
            </div>
            <p className='flex justify-center items-center sm:p-2.5' >Copyright &#169; {currentYear} </p>
            <p className='flex justify-center items-center sm:hidden' >Israel Adedamola.</p>
            <p className='flex justify-center items-center sm:hidden' >All Rights Reserved. Built with NextJS</p>

        </section>
    )
}

export default PortfolioContact