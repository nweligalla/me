import React, { useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { TypeAnimation } from "react-type-animation";
import { Link } from 'react-scroll';
import Social from './resusables/Social';
import { Element } from 'react-scroll';


function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <Element name="home" >
            <div className='w-full h-screen'>

                {/* container */}
                <div className="screen-section" data-aos="fade-up">
                    <p className='text-[#B6BBC4] '>Hi, my name is </p>
                    <p className='text-4xl sm:text-7xl font-bold text-[#F0ECE5]'>Nayana Weligalla </p>
                    <h2 className='text-3xl h-[8%] sm:text-6xl mt-2 font-bold text-[#31304D]'>
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                1000,
                                'Java Full Stack Developer',
                                1000,
                                'Web Developer',
                                1000,
                                'Msc. in CS Student',
                                1000,
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            speed={5}
                        />
                    </h2>



                    <div className='mt-7'>
                        <Link to="about" smooth={true} duration={500} offset={-150}>
                            <button className='text-[#ECECEC] border-[#ECECEC] group border-2 px-6 py-3 my-2 flex items-center hover:text-[#142D4C] hover:bg-[#9FD3C7] hover:border-[#9FD3C7] duration-200'>
                                About me <span className='group-hover:rotate-90 duration-200'><HiArrowNarrowRight className='ml-3' /></span>
                            </button>
                        </Link>
                    </div>
                    <Social />
                </div>
            </div>
        </Element>
    )
}

export default Home