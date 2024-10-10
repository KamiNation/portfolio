import React, { useState } from 'react'
import Button from '../../btnComponent/Button'
import { contactmap } from '@/app/utils/global'

const PortfolioContactCard: React.FC<contactmap> = ({ icon, desc, id }) => {


    const [socialId, setSocialId] = useState(id)

    const socialHandle = () => {
        if (socialId === 0) {
            location.href = "mailto:adedamolacopy@gmail.com"
        } else if (socialId === 1) {
            location.href = 'https://www.linkedin.com/in/israel-adedamola-606373139/'
        } else if (socialId === 2) {
            location.href = 'https://github.com/KamiNation'
        } else if (socialId === 3) {
            location.href = 'https://www.x.com/kamii_ai'
        }else {
            alert("Link Broken. It will be fixed ASAP")
        }
    }


    return (
        <div onClick={() => setSocialId(id)} className="flex items-center justify-center gap-2 m-4  hover:dark:text-green-600 hover:text-teal-600">
            <div>
                {icon}
            </div>
            <Button
                click={() => socialHandle()}
            >{desc}</Button>
        </div>
    )
}

export default PortfolioContactCard