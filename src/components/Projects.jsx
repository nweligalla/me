import React from 'react'
import ProjectCard from './resusables/ProjectCard';
import projectList from '../data/projectList.js'

function projects() {
    return (
        <div name='experience' className='w-full '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-center'>
                    <p className='section-title '>Projects</p>
                </div>

                <div className=" mt-9 mx-auto  dark:text-gray-100">
                    <ul className="space-y-2">
                        {
                            projectList.toReversed().map(({ projectName, description, time, techStack, associate }) => {
                                return (
                                    <ProjectCard
                                        time={time}
                                        projectName={projectName}
                                        description={description}
                                        techStack={techStack}
                                        associate={associate}
                                    />
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default projects