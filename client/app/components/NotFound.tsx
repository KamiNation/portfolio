"use client"
import React from 'react'
import Header from '../screens/Header'
import { BiLogoWhatsapp } from 'react-icons/bi'

const NotFound = () => {
    return (
        <div className='w-full min-h-screen '>
            <Header />
            <div className='flex flex-col p-12 justify-center items-center dark:text-teal-600 text-black w-full min-h-screen'>
                <div >This page is under maintenance.</div>
                <div >
                    While you are here, reach out on <BiLogoWhatsapp onClick={() =>
                        "wa.link/qdn8xj"
                    } />
                </div>

            </div>

        </div>
    )
}

export default NotFound