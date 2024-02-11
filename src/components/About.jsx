import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
function About() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div name='about' className='w-full'>
            <div data-aos="zoom-in" className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='section-title'>About</p>
                    </div>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
                        </p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis possimus, ex nam nemo facere odio, quos minus, reiciendis distinctio quas rerum? Ad, doloribus aut. Id maiores corrupti in aperiam!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About