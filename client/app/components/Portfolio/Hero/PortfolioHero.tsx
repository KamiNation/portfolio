import Image from 'next/image'
import React from 'react'
import Button from '../../btnComponent/Button'
import { BiLogoGithub, BiLogoLinkedin, BiSolidArrowFromTop } from 'react-icons/bi'

const PortfolioHero = () => {

    const gitClickHandle = () => {
        window.open("https://github.com/KamiNation", '_blank');
    }

    const linkedinClickHandle = () => {
        window.open('https://www.linkedin.com/in/israel-adedamola-606373139/', '_blank');
    }

    const contactHandle = () => {
        location.href = '#contact'
    }

  


    const downloadPDF = async (url: any) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch PDF');
            }

            const blob = await response.blob();

            // Extract the filename from the URL
            const filename = url.split('/').pop() || 'Israel_CV.pdf';

            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;

            // Use the extracted filename for the download
            link.download = filename;

            document.body.appendChild(link);
            link.click();

            window.URL.revokeObjectURL(downloadUrl);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    const handleDownload = () => {
        const pdfUrl = '/Israel_CV.pdf'; // Replace with your PDF's URL
        downloadPDF(pdfUrl);
    };



    return (
        <section id='portfolio' className='w-full min-h-screen flex  gap-40 mt-4 items-center justify-center text-black dark:text-teal-600 relative '>

            <div className='max-w-[400px] max-h-[400px] flex items-center justify-center sm:hidden md:hidden lg:hidden xl:hidden'>
                <Image src={"/kami.jpg"} alt='Israel' width={400} height={400} className='rounded-[50%] min-w-[400px] min-h-[400px]' />
            </div>



            <div className='flex-col h-[20vh] self-center text-center gap-8'>

                <p className="text-black dark:text-teal-600 text-center">Hello, I'm</p>

                <h1 className="text-black dark:text-teal-600 text-5xl">Israel Adedamola</h1>

                <p className="text-black dark:text-teal-600 text-2xl">Software Developer | Technical writer</p>


                <div className="flex justify-center gap-4">
                    <Button className="text-black dark:text-teal-600 font-semibold p-4  hover:dark:text-red-600 hover:text-teal-600" click={handleDownload} >
                        Download CV
                    </Button>

                    <Button className="text-black dark:text-teal-600 font-semibold p-4  hover:dark:text-red-600 hover:text-teal-600" click={contactHandle}>
                        Contact Me
                    </Button>
                </div>

                <div className="flex justify-center gap-4">
                    <BiLogoLinkedin className='pointer h-8 hover:dark:text-red-600 hover:text-teal-600' onClick={() => linkedinClickHandle()} />
                    <BiLogoGithub className='pointer h-8 hover:dark:text-red-600 hover:text-teal-600' onClick={() => gitClickHandle()} />
                </div>
            </div>

        </section>
    )
}

export default PortfolioHero