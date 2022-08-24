import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: '-100vh'
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                mass: 0.4,
                damping: 7,
                when: 'beforeChildren',
                staggerChildren: .4
            }
        }
    }

    const childVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <div className='flex flex-col md:flex-row p-10 pr-0 pt-0'>
            <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='show'
                className='relative pr-10 '>
                <span className='flex bg-gradient-to-r from-[#272727] to-[#11101D] p-2 mb-4 rounded-xl w-fit items-center h-8 text-xs'>
                    <img src='../assets/Discount.svg' alt='' />
                    20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
                <motion.h1 variants={childVariants} className='text-4xl leading-snug xl:text-[3.5rem] lg xl:leading-normal'>The Next <br />
                    <span className='text-[#5CE1E6]'>Generation</span><br />
                    Payment Method.</motion.h1>
                <motion.p variants={childVariants} className='leading-8 md:w-[73%]'>Our team of experts uses a methodology to
                    identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.</motion.p>
                <motion.button
                    whileHover={{ scale: 1.1, boxShadow: '0 0 6px #5ce1e6', textShadow: '0 0 6px #5ce1e6' }}
                    className='w-20 h-20 h md:w-28 md:h-28 rounded-full border-2 border-[#5ce1e6] absolute top-14 right-7 md:right-16 text-sm'
                >
                    Get started
                </motion.button>
            </motion.div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" className='bg-gradient-b from-[#BCA5FF] to-[#214D76]'>
                <img className='md:w-[70%] md:ml-[30%] mt-3 md:mt-0' src='../assets/robot.png' alt='robot' />
            </div>
        </div>
    )
}

export default HeroSection