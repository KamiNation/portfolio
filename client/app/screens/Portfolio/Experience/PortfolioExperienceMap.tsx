import { experiencemap, portfolioExperienceSW, portfolioExperienceTW } from '@/app/utils/global'
import React from 'react'
import PortfolioExperienceCard from './PortfolioExperienceCard'

const PortfolioExperienceMap = () => {
    return (
        <>

            <div className='p-6 flex-1 rounded-[2rem] text-center text-black dark:text-teal-600 border border-solid  dark:border-green-600 border-teal-600'>
                <h2 className='font-semibold text-[1.75rem] mb-8 text-black dark:text-teal-600 '>Software Development</h2>

                <div className='flex flex-wrap justify-around gap-10'>

                    {
                        portfolioExperienceSW.map((SW: experiencemap, index) => (
                            <PortfolioExperienceCard key={index}
                                rank={SW.rank}
                                icon={SW.icon}
                                skill={SW.skill}
                                year={SW.year}
                            />
                        ))
                    }
                </div>
            </div>


            <div className='p-6 flex-1 rounded-[2rem] text-center text-black dark:text-teal-600 border border-solid   dark:border-green-600 border-teal-600'>
                <h2 className='font-semibold text-[1.75rem] mb-8 text-black dark:text-teal-600 '>Technical Writing</h2>

                <div className='flex flex-wrap justify-around gap-10'>

                    {
                        portfolioExperienceTW.map((TW: experiencemap, index) => (
                            <PortfolioExperienceCard key={index}
                                rank={TW.rank}
                                icon={TW.icon}
                                skill={TW.skill}
                                year={TW.year}
                            />

                        ))
                    }

                </div>
            </div>




        </>

    )
}

export default PortfolioExperienceMap