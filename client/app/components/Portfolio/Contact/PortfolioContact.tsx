import React from 'react'
import PortfolioContactMap from './PortfolioContactMap'

const PortfolioContact = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section id='contact' className='w-full min-h-[50vh] mt-4  text-black dark:text-teal-600 relative'>
            <p className="text-center">Get in Touch</p>
            <h1 className="text-center text-5xl">Contact Me</h1>
            <div className="flex justify-center rounded-[2rem] my-8 mx-auto p-2 ">
                <PortfolioContactMap />
            </div>
            <p className='flex justify-center items-center' >Copyright &#169; {currentYear} Israel Adedamola. All Rights Reserved. Built with NextJS</p>
        </section>
    )
}

export default PortfolioContact