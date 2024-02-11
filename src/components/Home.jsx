import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


function Home() {
    return (
        <div name='home' className='w-full h-screen'>

            {/* container */}
            <div className="screen-section">
                <p className='text-[#B6BBC4] '>Hi, my name is </p>
                <p className='text-4xl sm:text-7xl font-bold text-[#F0ECE5]'>Nayana Weligalla </p>
                <h2 className='text-3xl sm:text-6xl mt-1 font-bold text-[#31304D]'>I.m a Full Stack Developer</h2>
                <p className='text-[#F0ECE5] py-4 max-w-[700px]'>
                    I am an experienced full-stack software developer with nearly 3 years of expertise in Java, Spring Boot, and Linux. Proficient in designing, implementing, and deploying applications across the complete software development cycle.
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