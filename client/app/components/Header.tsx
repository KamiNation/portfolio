"use client"
import Link from "next/link" // Importing Link component for navigation
import React, { FC, useEffect, useState } from "react" // Importing React, functional component type, and hooks

import NavItems from "../utils/NavItems" // Importing navigation items component
import ThemeSwitcher from "../utils/ThemeSwitcher" // Importing theme switcher component
// Created component folder
// First file created and imported into page component

import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi" // Importing icons
import { useSelector } from "react-redux" // Importing useSelector to access Redux state
import Image from "next/image" // Importing Image component for optimized images

// import avatar from "@/public/assets/photo.jpeg" // Default avatar image
// import { useLogOutQuery, useSocialAuthMutation } from "@/redux/features/auth/authApi"
import toast from "react-hot-toast"
import { useSession } from "next-auth/react"


// Header component for the app
const Header = () => {

    const [active, setActive] = useState(false) // State to control the sticky header

    const [openSidebar, setOpenSidebar] = useState(false) // State to control sidebar open/close

    const [open, setOpen] = useState(false);

    const [route, setRoute] = useState("")





    // Creating sticky header effect
    if (typeof window !== "undefined") { // Checking if running in the browser
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) { // If scrolled more than 80px
                setActive(true); // Set header to active (sticky)
            } else {
                setActive(false) // Remove active (sticky) state
            }
        })
    }

    // Function to handle sidebar close on click outside
    const handleClose = (e: any) => {
        if (e.target.id === "screen") { // Check if clicked outside the sidebar
            setOpenSidebar(false) // Close the sidebar
        }
    }

    return (
        <div className="w-full relative">
            <div className={`${active ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-black dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500 bg-blue-900" : "  w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"} border-b-teal-600 dark:border-b-green-600`}>
                {/* Header container with conditional classes for sticky effect */}

                <div className="w-[95%] xl:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between p-3" >
                        {/* Flex container for logo and navigation items */}

                        <div>
                            <Link href={"/"} // Logo link
                                className={"text-[25px] font-Poppins font-[500] sm:hidden md:hidden lg:hidden  text-black dark:text-teal-600 "}
                            >
                                Israel Adedamola | KAMI
                            </Link>

                            <Link href={"/"} // Logo link
                                className={"text-[25px] font-Poppins font-[500]  text-black dark:text-teal-600 2xl:hidden xl:hidden lg:hidden"}
                            >
                                KAMI
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <NavItems
                                isMobile={false} // Rendering for desktop
                            />

                            <ThemeSwitcher /> {/* Theme switcher button */}

                            {/* Mobile menu icon, only visible on smaller screens */}
                            <div className="xl:hidden">
                                <HiOutlineMenuAlt3
                                    size={25}
                                    className="cursor-pointer dark:text-white text-black"
                                    onClick={() => setOpenSidebar(true)} // Opens sidebar on click
                                />
                            </div>

                            {/* Conditional rendering based on user authentication */}

                        </div>
                    </div>
                </div>

                {/* Mobile sidebar */}
                {
                    openSidebar && (
                        <div className="fixed w-full h-screen top-0 left-0 z-[99999]"
                            onClick={handleClose} // Handle close on click outside
                            id="screen"
                        >
                            <div className="w-[70%] fixed z-[999999999] h-full sm:flex sm:justify-between sm:flex-col   top-0 right-0">

                                <NavItems isMobile={true} /> {/* Mobile navigation items */}
                                <p className="text-[16px] px-2 pl-5 text-black dark:text-teal-600">
                                    Israel Adedamola
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* Conditional rendering of modals based on current route */}




        </div>
    )
}

export default Header
