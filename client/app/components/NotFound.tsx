"use client"
import React, { useEffect, useState } from 'react'
import Header from '../screens/Header'
import { BiLogoWhatsapp } from 'react-icons/bi'
import PortfolioContact from '../screens/Portfolio/Contact/PortfolioContact'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
const NotFound = () => {


    const pathname = usePathname();
    const [webPath, setWebPath] = useState(false)

    useEffect(() => {

        console.log(pathname);

        if (pathname != '') {
            setWebPath(true)
            console.log('User is on the special page!');
        }



    }, [])


    return (
        <div className='w-full min-h-screen '>
            <Header />
            <div className='flex flex-col p-12 justify-center items-center dark:text-teal-600 text-black w-full min-h-screen'>
                <div className="p-8">This page is under maintenance.</div>
                <PortfolioContact whatsapp={webPath} />
            </div>
        </div>
    )
}

export default NotFound