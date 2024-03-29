import React from 'react'

type Props = {
    projectName: string,
    description: string,
    time: string,
    techStack: string[],
    associate: string,
}


function ProjectCard({ projectName, description, time, techStack, associate }: Props) {


    return (
        // <li>
        <div className="min-w-[100%] duration-200 cu flex items-start space-x-3 bg-[#31304D] p-4">
            <span className="flex items-center mt-1 h-8 text-sm hover:underline">{time}</span>
            <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between space-x-4 dark:text-gray-400">
                    <span className="inline-flex items-center pb-1 my-1 space-x-2 text-sm group dark:border-gray-700">
                        <span className=" text-lg font-bold dark:text-gray-100">{projectName}</span>
                    </span>
                    <span className=" text-sm">{associate}</span>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <div className='pt-2 flex flex-row flex-wrap'>
                    {techStack.map((tech, index) => {
                        return (
                            <span key={index} className="bg-gray-100 m-1 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                {tech}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
        // </li>
    )
}

export default ProjectCard