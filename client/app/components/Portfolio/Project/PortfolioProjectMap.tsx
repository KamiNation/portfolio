import { projectmap, portfolioProjectMap } from '@/app/utils/global'
import React from 'react'
import PortfolioProjectCard from './PortfolioProjectCard'

const PortfolioProjectMap = () => {
    return (
        <>
            {
                portfolioProjectMap.map((project: projectmap, index) => (
                    <PortfolioProjectCard key={index}
                        id={index}
                        github={project.github}
                        image={project.image}
                        live_demo={project.live_demo}
                        project_name={project.project_name}
                        technology={project.technology}
                    />
                ))
            }
        </>

    )
}

export default PortfolioProjectMap