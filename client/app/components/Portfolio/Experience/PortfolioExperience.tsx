import React from 'react'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioExperienceMap from './PortfolioExperienceMap'

const PortfolioExperience = () => {

    const arrowClickHandle = () => {
        location.href = '#about-me'
    }


    return (
        <section id='experience' className='w-full min-h-screen mt-4 text-black dark:text-teal-600 relative '>
            <p className="text-center">Explore My</p>
            <h1 className="text-5xl text-center">Experience</h1>
            <div className="justify-center flex ">
                <div className='gap-10 mb-8 mt-8 flex '>
                    <PortfolioExperienceMap />
                </div>
            </div>
            <BiSolidArrowFromTop className="absolute -right-5 bottom-10 pointer h-8" onClick={() => arrowClickHandle()} />
        </section>
    )
}

export default PortfolioExperience