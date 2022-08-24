import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize <= 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    const links = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/' },
        { name: 'Features', link: '/' },
        { name: 'Solution', link: '/' }
    ]

    return (
        <motion.div
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className='flex justify-between items-center p-10 pt-3 md:flex-row relative z-10'>
            <div className='flex'>
                <img src='../assets/logo.svg' alt='logo' />
                <h1 className='text-lg text-white m-3 font-semibold'>Hoo<span className='text-[#5CE1E6]'>Bank</span></h1>
            </div>
            <div onClick={() => setActiveMenu(!activeMenu)} className='text-white text-2xl md:hidden cursor-pointer'>
                <ion-icon name={activeMenu ? 'close' : 'menu'}></ion-icon>
            </div>
            {activeMenu && (
                <div className='flex flex-col mt-6 md:mt-0 md:flex-row md:space-x-8 transition-all duration-500 ease-in absolute md:relative top-12 md:top-0 left-0 h-[100vh] md:h-[auto] bg-[#1d1d1d] items-center space-y-5 md:space-y-0 pt-12 md:pt-[0] w-full md:w-fit md:bg-transparent'>
                    {links.map((link) => (
                        <NavLink key={link.name} className='text-white font-light hover:text-[#5CE1E6] hover:border-b-[#5ce1e6] hover:border-b-2' to={link.link} >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </motion.div>
    )
}

export default Navbar