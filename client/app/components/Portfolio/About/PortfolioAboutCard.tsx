import { aboutmap } from '@/app/utils/global'
import Image from 'next/image'
import React from 'react'




const PortfolioAboutCard: React.FC<aboutmap> = ({ year, skill, desc, icon }) => {
    return (

        <div className="p-6 flex-1 rounded-[2rem] border border-solid text-center dark:border-green-600 border-teal-600  text-black dark:text-teal-600">
            <div className='flex items-center justify-center'>
                {
                    icon
                }
            </div>
            <h3>{desc}</h3>
            <p>{year} </p><br />{skill}
        </div>
    )
}

export default PortfolioAboutCard