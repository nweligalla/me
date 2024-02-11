import React,{useEffect} from 'react'
import { FaLaptopCode } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Experience() {

    useEffect(()=>{
        AOS.init({duration:1000})
    },[])

    return (
        <div data-aos="fade-up" name='experience' className='w-full h-screen text-right'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='section-title'>Work Experience</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                </div>
                <ol class="education-timeline border-e mx-4 ">

                    <li>
                        <span className='-end-3'>
                            <FaLaptopCode />
                        </span>
                        <h3>Software Engineer</h3>
                        <time >2023 April - Present</time>
                        <p >auraDOT (Pvt) Ltd</p>
                    </li>

                    <li>
                        <span className='-end-3'>
                            <FaLaptopCode />
                        </span>
                        <h3>Associate Software Engineer</h3>
                        <time >2022 July - 2023 April</time>
                        <p >auraDOT (Pvt) Ltd</p>
                    </li>

                    <li>
                        <span className='-end-3'>
                            <FaLaptopCode />
                        </span>
                        <h3>Trainee Software Engineer</h3>
                        <time >2021 Octomber - 2022 June</time>
                        <p >auraDOT (Pvt) Ltd</p>
                    </li>

                    <li>
                        <span className='-end-3'>
                            <FaLaptopCode />
                        </span>
                        <h3>Trainee Software Intern</h3>
                        <time >2021 April - 2021 September</time>
                        <p >auraDOT (Pvt) Ltd</p>
                    </li>

                </ol>
            </div>
        </div>
    )
}

export default Experience