import React from 'react'
import { aboutmap, portfolioAboutMap } from '@/app/utils/global'
import PortfolioAboutCard from './PortfolioAboutCard'



const PortfolioMap = () => {
    return (
        <div className='gap-8 mx-8 my-8 flex sm:flex-col'>



            {
                portfolioAboutMap.map((about: aboutmap, index) => (
                    <PortfolioAboutCard key={index}
                    skill={about.skill}
                    desc={about.desc}
                    year={about.year}
                    icon={about.icon}
                    />
                ))
            }
        </div>
    )
}

export default PortfolioMap