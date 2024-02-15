import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Element } from 'react-scroll';
function About() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <Element name="about" >
            <div className='w-full'>
                <div data-aos="zoom-in" className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4'>
                            <p className='section-title'>About me</p>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4'>
                        <div className='sm:text-right text-4xl font-bold '>
                            <p>
                                Software Engineer / Full Stack Developer
                            </p>
                        </div>
                        <div>
                            I am an experienced full-stack Software Engineer with nearly 3 years of expertise in Java, Spring Boot, and Linux. Proficient in designing, implementing, and deploying applications across the complete software development cycle.
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default About