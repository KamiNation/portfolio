import React, { useState } from 'react'
import Button from '../../../components/Button'
import { contactmap } from '@/app/utils/global'

const PortfolioContactCard: React.FC<contactmap> = ({ icon, desc, id }) => {


    const [socialId, setSocialId] = useState(id)

    const socialHandle = () => {
        if (socialId === 0) {
            window.open("mailto:adedamolacopy@gmail.com", "_blank")
        } else if (socialId === 1) {
            window.open('https://www.linkedin.com/in/israel-adedamola-606373139/', "_blank")
        } else if (socialId === 2) {
            window.open('https://github.com/KamiNation', "_blank")
        } else if (socialId === 3) {
            window.open('https://www.x.com/kamii_ai', "_blank")
        } else if (socialId === 4) {
            window.open('https://kamii.hashnode.dev/', "_blank")
        } else {
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