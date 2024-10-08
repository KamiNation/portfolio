"use client"

// 4th file created
// install, npm i react-icons

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {BiMoon, BiSun} from "react-icons/bi"

const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false)

    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) { return null }

    return (
        <div className='flex items-center justify-center mx-4 dark:text-teal-600 text-black'>
            {
                theme === "light" ? (
                    <BiMoon
                        className="cursor-pointer"
                        fill="black"
                        size={25}
                        onClick={() => setTheme("dark")}
                    />
                ) : (
                    <BiSun
                        size={25}
                        onClick={() => setTheme("light")}
                    />
                )
            }
        </div>
    )
}

export default ThemeSwitcher