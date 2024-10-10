import Image from 'next/image'
import React from 'react'
import Button from '../../btnComponent/Button'
import { projectmap } from '@/app/utils/global'

const PortfolioProjectCard: React.FC<projectmap> = ({ project_name, image, github, live_demo, technology, id }) => {

    const gitHandle = () => {
        window.open(`${github}`, '_blank');
    }

    const liveDemoHandle = () => {
        window.open(`${live_demo}`, '_blank');
    }


    return (

        <div className="p-6 flex-1 rounded-[2rem] text-center color-container border border-solid  dark:border-green-600 border-teal-600" >

            <div className="flex flex-wrap flex-row gap-10 justify-around" >
                <Image src={image} alt="Project 1" width={150} height={150} className="rounded-[2rem] w-[90%] h-[90%]" />
            </div>

            <h2 className="font-semibold text-[1.75rem] mb-8 m-[1px]" >{project_name}</h2>
            <div className="flex justify-center gap-4">
                <Button className="font-semibold p-4 w-32 rounded-[2rem]"
                click={gitHandle}
                >
                    Github
                </Button>
                <Button className="font-semibold p-4 w-32 rounded-[2rem]"
                click={liveDemoHandle} 
                >
                    Live Demo
                </Button>
            </div>
            <div className="font-semibold p-4  rounded-[2rem] flex">Technology: <span className='ml-2'>{technology}</span></div>

        </div >
    )
}

export default PortfolioProjectCard