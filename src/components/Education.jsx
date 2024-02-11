import React, { useEffect } from 'react'
import { MdOutlineSchool } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Education() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div name='education' className='w-full h-screen'>
            <div data-aos="fade-up" className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='section-title'>Education</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                </div>
                <ol class="education-timeline mx-4 border-s">

                    <li>
                        <span className='-start-3'>
                            <MdOutlineSchool />
                        </span>
                        <h3>University of Moratuwa, Sri Lanka</h3>
                        <time >2024 - 2026</time>
                        <p >MSc. in Computer Science Specialising in Cloud Computing</p>
                    </li>

                    <li>
                        <span className='-start-3'>
                            <MdOutlineSchool />
                        </span>
                        <h3>University of Sri Jayewardenepura, Sri Lanka</h3>
                        <time >2017 - 2021</time>
                        <p >Bachelor of Information and Communication Technology (Honours) Second class, GPA - 3.19</p>
                    </li>
                    <li>
                        <span className='-start-3'>
                            <MdOutlineSchool />
                        </span>
                        <h3>Dharmapala Maha Vidyalaya, Bandarawela</h3>
                        <time >2014 - 2016</time>
                        <p >GCE A/L (2016) | Grade 12 - 13 - District rank 1 , Island rank 31  </p>
                    </li>

                    <li>
                        <span className='-start-3'>
                            <MdOutlineSchool />
                        </span>
                        <h3>Welimada Vijaya Vidyalaya</h3>
                        <time >2002 - 2013</time>
                        <p >GCE O/L (2013) | Grade 1 - 11 </p>
                    </li>

                </ol>
            </div>
        </div>
    )
}

export default Education