import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


function Home() {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className='text-pink-600 '>Hi, my name is </p>
                <p className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nayana Weligalla </p>
                <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>I.m a Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    I am an experienced full-stack software developer with nearly 3 years of expertise in Java, Spring Boot, and Linux. Proficient in designing, implementing, and deploying applications across the complete software development cycle.
                </p>
                <div >
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200'>
                        View Work <span className='group-hover:rotate-90 duration-200'><HiArrowNarrowRight className='ml-3' /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home