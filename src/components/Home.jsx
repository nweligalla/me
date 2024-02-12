import React, { useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { TypeAnimation } from 'react-type-animation';
function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div name='home' className='w-full h-screen'>

            {/* container */}
            <div className="screen-section" data-aos="fade-up">
                <p className='text-[#B6BBC4] '>Hi, my name is </p>
                <p className='text-4xl sm:text-7xl font-bold text-[#F0ECE5]'>Nayana Weligalla </p>
                <h2 className='text-3xl sm:text-6xl mt-2 font-bold text-[#31304D]'>
                    <TypeAnimation
                        sequence={[
                            'Software Engineer',
                            1000,
                            'Full Stack Developer',
                            1000,
                            'Msc. Student',
                            1000,
                        ]}
                        wrapper="span"
                        speed={5}
                        repeat={Infinity}
                    />
                </h2>
                <p className='text-[#F0ECE5] py-4 max-w-[700px]'>
                    I am an experienced full-stack Software Engineer with nearly 3 years of expertise in Java, Spring Boot, and Linux. Proficient in designing, implementing, and deploying applications across the complete software development cycle.
                </p>
                <div >
                    <button className='text-[#ECECEC] border-[#ECECEC] group border-2 px-6 py-3 my-2 flex items-center hover:text-[#142D4C] hover:bg-[#9FD3C7] hover:border-[#9FD3C7] duration-200'>
                        View Work <span className='group-hover:rotate-90 duration-200'><HiArrowNarrowRight className='ml-3' /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home