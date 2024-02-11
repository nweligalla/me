import React from 'react'
import { MdOutlineSchool } from "react-icons/md";


function Experience() {
    return (
        <div name='experience' className='w-full h-screen text-right'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='section-title'>Work Experience</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                </div>
                <ol class="education-timeline border-e mx-4 ">

                    <li>
                        <span className='-end-3'>
                            <MdOutlineSchool />
                        </span>
                        <h3>Software Engineer</h3>
                        <time >2023 April - Present</time>
                        <p >Auradot (Pvt) Ltd</p>
                    </li>

                    <li>
                        <span className='-end-3'>
                            <MdOutlineSchool />
                        </span>
                        <h3>Associate Software Engineer</h3>
                        <time >2022 July - 2023 April</time>
                        <p >Auradot (Pvt) Ltd</p>
                    </li>

                    <li>
                        <span className='-end-3'>
                            <MdOutlineSchool />
                        </span>
                        <h3>Trainee Software Engineer</h3>
                        <time >2021 Octomber - 2022 June</time>
                        <p >Auradot (Pvt) Ltd</p>
                    </li>

                    <li>
                        <span className='-end-3'>
                            <MdOutlineSchool />
                        </span>
                        <h3>Trainee Software Intern</h3>
                        <time >2021 April - 2021 September</time>
                        <p >Auradot (Pvt) Ltd</p>
                    </li>

                </ol>
            </div>
        </div>
    )
}

export default Experience