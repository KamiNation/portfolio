import React from 'react'
import PortfolioContactMap from './PortfolioContactMap'
import { contactMap } from '@/app/utils/global';

// import MatrixEffect from '@/app/components/MatrixEffect';
// import ComponentWithMatrixBG from '@/app/utils/MatrixHook';
// import MatrixEffectText from '@/app/components/matrix/MatrixText';

const PortfolioContact: React.FC<contactMap> = ({whatsapp}) => {
    const currentYear = new Date().getFullYear();

    return (
        <section id='contact' className='w-full min-h-[50vh] mt-4  text-black dark:text-teal-600 relative'>
            {/* <ComponentWithMatrixBG > */}
            <p className="text-center">Get in Touch</p>
            <h1 className="text-center text-5xl">Contact Me</h1>
            <div className="flex justify-center rounded-[2rem] my-8 mx-auto p-2 sm:flex-wrap md:flex-wrap ">
                <PortfolioContactMap  whatsapp={whatsapp} />
            </div>
            <div className='flex items-center justify-center gap-2'>
                <p className='flex justify-center items-center sm:p-2.5' >Copyright &#169; {currentYear} </p>
                <p className='flex justify-center items-center  md:hidden' > Israel Adedamola KAMI </p>
                {/* <p className='flex justify-center items-center  md:hidden' ><MatrixEffect /></p> */}
                {/* <p className='flex justify-center items-center  md:hidden' > <MatrixEffectText text='Israel Adedamola KAMI' speed={90000000} /> </p> */}
                <p className='flex justify-center items-center sm:hidden md:hidden' >All Rights Reserved. Built with NextJS</p>
            </div>
            {/* </ComponentWithMatrixBG> */}
        </section>
    )
}

export default PortfolioContact