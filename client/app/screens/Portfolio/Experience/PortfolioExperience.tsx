import React from 'react'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioExperienceMap from './PortfolioExperienceMap'

const PortfolioExperience = () => {



    return (
        <section id='experience' className='w-full min-h-screen mt-4 text-black dark:text-teal-600 relative p-2.5'>
            <p className="text-center">Explore My</p>
            <h1 className="text-5xl text-center">Experience</h1>
            <div className="justify-center flex ">
                <div className='gap-10 mb-8 mt-8 flex sm:flex-col md:flex-col'>
                    <PortfolioExperienceMap />
                </div>
            </div>
        </section>
    )
}

export default PortfolioExperience