"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

// third file created and imported in Header component

export const navItemsData = [
    {
        name: "Portfolio",
        url: "/",
    },
    {
        name: "E-commerce",
        url: "/ecommerce",
    },
    {
        name: "Blog",
        url: "/blog",
    },
    {
        name: "Talent",
        url: "/talent",
    },
    {
        name: "Community",
        url: "/community",
    },
];


type Props = {
    isMobile: boolean
}


const NavItems: React.FC<Props> = ({ isMobile }) => {
    const [active, setActive] = useState<string>('')

    const pathname = usePathname()

    useEffect(() => {
        if (typeof window !== 'undefined') {  // Ensures that the code only runs in the client
            const currentPath = pathname.replace(/\/$/, ""); // Remove trailing slash if any
            console.log("Current path =>:", currentPath);
            const activeMenu = navItemsData.find(menu => menu.url === currentPath)
            setActive(activeMenu ? activeMenu.url : '')
        }
    }, [pathname])


    return (
        <>
            <div className='hidden 800px:flex'>

                {
                    navItemsData && navItemsData.map((navElement, index) => (
                        <Link href={`${navElement.url}`} key={index} passHref>
                            <span
                                className={
                                    `${active === navElement.url ?
                                        `dark:text-[green] text-green-600` : "dark:text-teal-600 text-black"} text-[18px] px-4 font-Poppins font-[400] hover:dark:text-red-600 hover:text-teal-600
                    `}

                            >
                                {navElement.name}
                            </span>
                        </Link>
                    ))
                }

            </div>


            {
                isMobile && (
                    <div className='800px:hidden mt-5 border border-solid border-red-800'>
                        {/* add logo */}

                        <div className='w-full text-center py-6'>
                            <Link href={"/"} passHref>
                                <span className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
                                    KaMi
                                </span>
                            </Link>
                        </div>

                        <div className='flex-col items-center justify-center'>
                            {
                                navItemsData && navItemsData.map((navElement, index) => (
                                    <Link href={`${navElement.url}`} key={index} passHref>
                                        <span
                                            className={
                                                `${active === navElement.url ?
                                                    "dark:text-[green] text-green-600" : "dark:text-teal-600 text-black"} text-[18px] px-4 font-Poppins font-[400] 
                            `}>
                                            {navElement.name}
                                        </span>
                                    </Link>
                                ))
                            }
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default NavItems