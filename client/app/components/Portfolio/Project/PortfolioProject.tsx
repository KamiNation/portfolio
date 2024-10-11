import React from 'react'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioProjectMap from './PortfolioProjectMap'

const PortfolioProject = () => {

    const arrowClickHandle = () => {
        location.href = '#experience'
    }


    return (
        <section id='project' className='w-full min-h-screen mt-4 text-black dark:text-teal-600 relative p-2.5'>


            <p className="text-center">Browse My Recent</p>


            <h1 className="text-center text-5xl">Projects</h1>

            <div className="flex flex-col justify-center">

                <div className="flex gap-8 my-8 flex-wrap">

                    <PortfolioProjectMap/>

                </div>
            </div>
        </section>
    )
}

export default PortfolioProject