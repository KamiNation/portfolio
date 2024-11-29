import { contactmap, portfolioContactMap, contactMap } from '@/app/utils/global'
import React from 'react'
import PortfolioContactCard from './PortfolioContactCard'
import { BiLogoWhatsapp } from 'react-icons/bi'
import Button from '@/app/components/Button'


const PortfolioContactMap: React.FC<contactMap> = ({ whatsapp }) => {


    const whatsappHandler = () => {
        window.open('https://wa.link/qdn8xj', "_blank")

    }


    return (
        <>
            {
                !whatsapp ? (
                    portfolioContactMap.map((contact: contactmap, index) => (
                        <PortfolioContactCard key={index}
                            id={index}
                            desc={contact.desc}
                            icon={contact.icon}
                        />
                    ))
                ) : (
                    <div className="flex items-center justify-center gap-2 m-4  hover:dark:text-green-600 hover:text-teal-600">
                        <div>
                            <BiLogoWhatsapp />
                        </div>
                        <Button
                            click={() => whatsappHandler()}
                        >Whatsapp</Button>
                    </div>

                )
            }
        </>

    )
}

export default PortfolioContactMap