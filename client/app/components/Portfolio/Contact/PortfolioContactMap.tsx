import { contactmap, portfolioContactMap  } from '@/app/utils/global'
import React from 'react'
import PortfolioContactCard from './PortfolioContactCard'


const PortfolioContactMap = () => {
    return (
        <>
            {
                portfolioContactMap.map((contact: contactmap, index) => (
                    <PortfolioContactCard key={index}
                        id={index}
                        desc={contact.desc}
                        icon={contact.icon}
                    />
                ))
            }
        </>

    )
}

export default PortfolioContactMap