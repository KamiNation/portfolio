import { ImageLoader, ImageProps, StaticImageData } from "next/image";
import { ReactElement } from "react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiRotateRight } from "react-icons/bi";
import { FaHashnode } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";


export interface contactMap {
    whatsapp?: boolean
}
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
        skill:"CSS",
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
    {
        icon: <BiRotateRight />,
        skill: "Redux",
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
    {
        icon: <BiRotateRight />,
        skill: "Gitbook",
        rank: "Intermediate",
    },
]



export interface projectmap {
    id?: number
    image:  StaticImageData | string
    project_name?: string
    github?: string
    live_demo?: string
    technology?: string
}


export const portfolioProjectMap: projectmap[] = [
    {
        project_name: "Expense Tracker",
        github: "https://github.com/KamiNation/ExpenseTrackerTypescript-Tailwind",
        live_demo: "https://expense-tracker-typescript-tailwind.vercel.app/",
        technology: " react typescript tailwind vite",
        image: "/tracker.png"
    },
    {
        project_name: "Joke API + Swagger_Docs",
        github: "https://github.com/KamiNation/JokeAPI-UI-SwaggerDocs",
        live_demo: "",
        technology: " swagger express node tailwind nodemon morgan",
        image: "/jokeSwagger.gif"
    },
    {
        project_name: "Mayport",
        github: "https://github.com/KamiNation/Mayport",
        live_demo: "mayportdemo.vercel.app",
        technology: " tailwind react  vite",
        image: "/mayport.png"
    },
    {
        project_name: "Portfolio",
        github: "https://github.com/KamiNation/portfolio",
        live_demo: "https://kamiportfolio.vercel.app/",
        technology: " tailwind react typescript nextjs",
        image: "/portfolio.png"
    },
    {
        project_name: "JokeAPI+UI+Swagger",
        github: "https://github.com/KamiNation/JokeAPI-UI-SwaggerDocs",
        live_demo: "",
        technology: " swagger express node tailwind ejs morgan nodemon",
        image: "/jokeUI.gif"
    },
    {
        project_name: "KOSY African kitchen",
        github: "",
        live_demo: "https://kosyafricankitchen.vercel.app/",
        technology: "nextjs tailwind react",
        image: "/kosy.png"
    },
    {
        project_name: "Travel Advisor",
        github: "https://github.com/KamiNation/travel-advisory",
        live_demo: "https://travel-advisory-zeta.vercel.app/",
        technology: "react pwa css vite",
        image: "/traveladvisor.png"
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
    {
        icon: <FaHashnode />,
        desc: "Hashnode",
    },
]