import { ImageProps } from "next/image";
import { ReactElement } from "react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiRotateRight } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

export interface aboutmap {
    icon?: ReactElement<any>
    desc?: string
    year?: string
    skill?: string
}


export const portfolioAboutMap: aboutmap[] = [
    {
        icon: <BiRotateRight />,
        desc: "Experience",
        year: "1 year",
        skill: "Technical Writing",
    },
    {
        icon: <BiRotateRight />,
        desc: "Experience",
        year: "11 month",
        skill: "Software Development",
    }
]



export interface experiencemap {
    icon?: ReactElement<any>
    year?: string
    skill?: string
    rank?: string
    desc?: string

}

export const portfolioExperienceSW: experiencemap[] = [
    {
        icon: <BiRotateRight />,
        skill: "HTML",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "CSS",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Javascript",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Typescript",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "MongoDB",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Express",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "React",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "NextJS",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "NodeJS",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Axios",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "RTKQuery",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "React Native",
        rank: "Intermediate",
    },
]


export const portfolioExperienceTW: experiencemap[] = [
    {
        icon: <BiRotateRight />,
        skill: "Swagger",
        rank: "Intermediate",

    },
    {
        icon: <BiRotateRight />,
        skill: "Postman",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Github",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Git",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Trello",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Discord",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Slack",
        rank: "Intermediate",
    },
    {
        icon: <BiRotateRight />,
        skill: "Markdown",
        rank: "Intermediate",
    },
]



export interface projectmap {
    id?: number
    image?: ImageProps
    project_name?: string
    github?: string
    live_demo?: string
    technology?: string
}


export const portfolioProjectMap: projectmap[] = [
    {
        project_name: "Simple Card",
        github: "Link not available",
        live_demo: "Link not available",
        technology: "html css"
    },
    {
        project_name: "Food Page",
        github: "Link not available",
        live_demo: "Link not available",
        technology: "html css"
    },
]


export interface contactmap {
    id?: number
    icon?: ReactElement<any>
    desc?: string
}



export const portfolioContactMap: contactmap[] = [
    {
        icon: <HiMail />,
        desc: "Israel's Mail",
    },
    {
        icon: <BiLogoLinkedin />,
        desc: "LinkedIn",
    },
    {
        icon: <BiLogoGithub />,
        desc: "Github",
    },
    {
        icon: <BiLogoTwitter />,
        desc: "Twitter",
    },
]