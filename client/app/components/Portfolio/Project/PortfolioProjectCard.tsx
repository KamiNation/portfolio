import Image from 'next/image'
import React from 'react'
import Button from '../../btnComponent/Button'
import { projectmap } from '@/app/utils/global'

const PortfolioProjectCard: React.FC<projectmap> = ({ project_name, github, live_demo, technology, id }) => {

    


    return (

        <div className="p-6 flex-1 rounded-[2rem] text-center color-container border border-solid  dark:border-red-600 border-teal-600" >

            {/* <div className="flex flex-wrap flex-row gap-10 justify-around" >
                <Image src={""} alt="Project 1" className="rounded-[2rem] w-[90%] h-[90%]" />
            </div> */}

            <h2 className="font-semibold text-[1.75rem] mb-8 m-[1px]" >{project_name}</h2>
            <div className="flex justify-center gap-4">
                <Button className="font-semibold p-4 w-32 rounded-[2rem]"
                // onClick={pricingGithub}
                >
                    Github
                </Button>
                <Button className="font-semibold p-4 w-32 rounded-[2rem]"
                // onClick={livePricingDemo} 
                >
                    Live Demo
                </Button>
            </div>
            <div className="font-semibold p-4  rounded-[2rem] flex">Technology: <span className='ml-2'>{technology}</span></div>

        </div >
    )
}

export default PortfolioProjectCard