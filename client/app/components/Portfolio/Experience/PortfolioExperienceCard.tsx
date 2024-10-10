import { experiencemap } from '@/app/utils/global'
import Image from 'next/image'
import React from 'react'





const PortfolioExperienceCard: React.FC<experiencemap> = ({ icon, rank, skill }) => {
    return (
        <article className='flex w-40 justify-around gap-2'>
            {icon}
            <div>
                <h3 className='text-black dark:text-teal-600 '>{skill}</h3>
                <p className='text-black dark:text-green-600  '>{rank}</p>
            </div>
        </article>
    )
}

export default PortfolioExperienceCard