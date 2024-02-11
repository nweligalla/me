import React from 'react'

function ProjectCard({ projectName, description, time, techStack, company }) {
    return (
        <li className="flex items-start space-x-3 bg-[#31304D] p-4">
            <span rel="noopener noreferrer" href="#" className="flex items-center h-8 text-sm hover:underline">{time}</span>
            <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                    <span rel="noopener noreferrer" href="#" className="inline-flex items-center px-3 pb-1 my-1 space-x-2 text-sm group dark:border-gray-700">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full dark:bg-violet-400"></span>
                        <span className=" text-lg dark:text-gray-100">{projectName}</span>

                    </span>
                    <span className=" text-sm">{company}</span>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div className='mt-1'>
                    {techStack.map(function (tech) {
                        return (
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                {tech}
                            </span>
                        )
                    })}
                </div>
            </div>
        </li>
    )
}

export default ProjectCard