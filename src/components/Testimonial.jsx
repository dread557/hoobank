import React, { useEffect } from 'react'
import Button from './Button'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {

    const data = [
        {
            text: "Everything you need to accept card payments and grow your business anywhere on the planet.",
            img: "../assets/Image.png",
            name: "Herman Jensen",
            job: "Founder & Leader"
        },
        {
            text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
            img: "../assets/Image-2.png",
            name: "Steve Mark",
            job: "Founder & Leader"
        },
        {
            text: "It is usually people in the money business, finance, and international trade that are really rich.",
            img: "../assets/Image-3.png",
            name: "Kenn Gallagher",
            job: "Founder & Leader"
        }
    ]

    const containerVariants = {
        hidden: {
            opacity: 0,
            x: -100
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                mass: 0.4,
                damping: 7,
                when: 'beforeChildren',
                staggerChildren: .2
            }
        }
    }

    const childVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const control = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            control.start('show')
        }
    }, [inView, control])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div className='p-10'>
            <div className='flex mb-16 justify-between md:space-x-32 flex-col md:flex-row'>
                <h1 className='text-3xl mb-2 font-semibold'>What people are saying about us</h1>
                <div>
                    <p className='md:w-[60%]'>Everything you need to accept card
                        payments and grow your business anywhere on the planet.</p>
                </div>
            </div>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial='hidden'
                animate={control}
                className='flex justify-between flex-col md:flex-row'>
                {data.map((p) => (
                    <div
                        key={p.name}
                        className='bg-f flex items-start flex-col space-y-6 md:h-[395px] h-[100%] md:w-[370px] w-[100%] p-7 justify-evenly rounded-lg'>
                        <motion.img variants={childVariants} src='../assets/quote.png' alt='' />
                        <motion.p variants={childVariants}>{p.text}</motion.p>
                        <motion.div variants={childVariants} className='flex space-x-5'>
                            <motion.img variants={childVariants} className='w-12 h-12' src={p.img} alt={p.name} />
                            <motion.span variants={childVariants}>
                                <motion.h5 variants={childVariants}>{p.name}</motion.h5>
                                <motion.p variants={childVariants}>{p.job}</motion.p>
                            </motion.span>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
            <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" className='flex flex-col md:flex-row justify-between items-center mt-16 space-y-5'>
                <img src='../assets/airbnb.png' alt='' />
                <img src='../assets/binance.png' alt='' />
                <img src='../assets/cb.png' alt='' />
                <img src='../assets/db.png' alt='' />
            </div>
            <div data-aos="fade-up-right" data-aos-delay="100" data-aos-duration="1000" className='flex flex-col md:flex-row justify-between bg-str md:h-[293px] rounded-3xl items-center p-10 mt-11'>
                <div className='mb-3'>
                    <h1 className='text-3xl font-semibold'>Let's try our service now!</h1>
                    <p className='md:w-[55%]'>Everything you need to accept card
                        payments and grow your business anywhere
                        on the planet.</p>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Testimonial