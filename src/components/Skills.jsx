import React, { useEffect } from 'react'
import skills from '../data/skillsList'

import AOS from 'aos';
import 'aos/dist/aos.css'
function Skills() {


    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    return (
        <div name='skills' className='w-full '>
            <div data-aos="fade-up" className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='section-title'>Skills</p>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, accusamus.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
                    {
                        skills.map(({ name, imgUrl }) => {
                            return (
                                <div className='skill-card'>
                                    <img src={imgUrl} alt={name} />
                                    <p >{name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills