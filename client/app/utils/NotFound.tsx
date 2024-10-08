import React from 'react'
import Header from '../components/Header'

const NotFound = () => {
    return (
        <div className='w-full min-h-screen '>
            <Header />
            <div className='flex justify-center items-center dark:text-teal-600 text-black min-h-screen p-4'>
                <div >This page is under maintenance. Check back soon. Thank you for understanding</div>
            </div>

        </div>
    )
}

export default NotFound