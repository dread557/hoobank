import React, { useEffect } from 'react'
import Button from './Button'
import AOS from "aos";
import "aos/dist/aos.css";


const Main = () => {

    const data = [
        { title: 'USER ACTIVE', value: '3800+' },
        { title: 'TRUSTED BY COMPANY', value: '230+' },
        { title: 'TRANSANCTIONS', value: '230M+' }
    ]

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div className='p-10 flex  justify-center items-center flex-col'>
            <div data-aos="zoom-in" data-aos-duration="2000" className='flex flex-col md:flex-row md:space-x-6 justify-between items-center w-full'>
                {data.map((x) => (
                    <span className='flex items-center space-x-12 '>
                        <p className='text-xl md:text-4xl text-white'>{x.value}</p> <p className='text-[#5CE1E6] text-sm pr-6 md:border-r-2 border-gray-500'>{x.title} </p>
                    </span>
                ))}
            </div>
            <div className='flex mt-20 justify-between flex-col md:flex-row items-center'>
                <div data-aos="fade-right" data-aos-duration="1000" className='md:w-[50%]'>
                    <h1 className='text-[2rem] md:text-4xl leading-[160%] mb-5 font-semibold'>You do the business, we'll handle the money.</h1>
                    <p className='text-base leading-[170%] md:w-[70%] mb-8'>With the right credit card, you can improve
                        your financial life by building credit, earning
                        rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <Button />
                </div>
                <div data-aos="fade-left" data-aos-delay="100" className='flex flex-col space-y-6 mt-8 '>
                    <div className='md:flex items-center space-x-5 w-fit md:p-3 md:pl-5 md:pr-5'>
                        <img className='w-12 mb-3 md:w-auto' src='../assets/star.png' alt='star' />
                        <div>
                            <h5 className='text-sm font-bold'>Rewards</h5>
                            <p>The best credit cards offer some
                                tantalizing combinations of pro and prizes</p>
                        </div>
                    </div>
                    <div className='md:flex items-center space-x-5 w-fit md:p-3 md:pl-5 md:pr-5 bg-gradient-to-r from-[#ffffff00] to-[#14101d] rounded-xl' >
                        <img className='w-12 mb-3 md:w-auto' src='../assets/badge.svg' alt='badge' />
                        <div>
                            <h5 className='text-sm font-bold'>100% Secured</h5>
                            <p>The best credit cards offer some tantalizing
                                combinations of pro and prizes</p>
                        </div>

                    </div>
                    <div className='md:flex items-center space-x-5 w-fit md:p-3 md:pl-5 md:pr-5'>
                        <img className='w-12 mb-3 md:w-auto' src='../assets/msg.svg' alt='msg' />
                        <div>
                            <h5 className='text-sm font-bold'>Balance Transfer</h5>
                            <p>We take proactive steps make sure your
                                information and transactions are secure.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center mt-8'>
                <div data-aos="fade-right" data-aos-duration="2000">
                    <img className='md:w-[70%]' src='../assets/paypal.png' alt='paypal' />
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="50">
                    <h1 className='text-3xl md:w-[70%] mb-6 font-semibold'>Easily control your billing & invoicing.</h1>
                    <p>Elit enim sed massa etiam. Mauris eu adipiscing
                        ultrices ametodio aenean neque. Fusce ipsum orci
                        rhoncus aliporttitor integer platea placerat.</p>
                    <div className='flex space-x-6 mt-4'>
                        <img className='cursor-pointer' src='../assets/store.svg' alt='appl store' />
                        <img className='cursor-pointer' src='../assets/gStore.svg' alt='playstore' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center mt-8'>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <h1 className='text-3xl md:w-[70%] mb-6 font-semibold'>Find a better card deal in few easy steps.</h1>
                    <p className='md:w-[70%] mb-7'>Arcu tortor, purus in mattis at sed integer faucibus
                        . Aliquet quis aliquet eget mauris tortor.ç Aliquet
                        ultrices ac, ametau.</p>
                    <Button />
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='mt-6'>
                    <img className='md:w-[70%]' src='../assets/analysis.png' alt='analysis' />
                </div>
            </div>
        </div>
    )
}

export default Main