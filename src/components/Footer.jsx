import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"
            className=' p-10 bg-[#0B0A0C99]'>
            <div className='flex flex-col md:flex-row justify-between pb-8 border-b border-[#3F3E45]'>
                <div>
                    <div className='flex'>
                        <img src='../assets/logo.svg' alt='logo' />
                        <h1 className='text-3xl text-white m-3 font-semibold'>Hoo<span className='text-[#5CE1E6]'>Bank</span></h1>
                    </div>
                    <p>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-16 mt-7'>
                    <div>
                        <h4 className='mb-4'>Useful Links</h4>
                        <ul className='space-y-3'>
                            <li><a href='/'>Content</a></li>
                            <li><a href='/'>How it works</a></li>
                            <li> <a href='/'>Create</a></li>
                            <li><a href='/'>Explore</a></li>
                            <li><a href='/'>Terms & Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='mb-4'>Community</h4>
                        <ul className='space-y-3'>
                            <li><a href='/'>Help Center</a></li>
                            <li><a href='/'>Partners</a></li>
                            <li> <a href='/'>Suggestions</a></li>
                            <li><a href='/'>Blog</a></li>
                            <li><a href='/'>News Letter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='mb-4'>Partner</h4>
                        <ul className='space-y-3'>
                            <li><a href='/'>Our Partners</a></li>
                            <li><a href='/'>Become a Partner</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between md:items-center mt-8'>
                <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
                <div className='flex space-x-10 mt-4 md:mt-0'>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </div>
            </div>
        </div>

    )
}

export default Footer