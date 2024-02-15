import React from 'react'
import { FaReact} from 'react-icons/fa';

function Footer() {
        return (


            <footer className="bg-white shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        <a href="https://github.com/nweligalla" className="hover:underline">Made with <FaReact className='inline ml-1' /></a>
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="https://www.linkedin.com/in/nweligalla/" target='_blank' rel='noreferrer'  className=" me-2">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://github.com/nweligalla" target='_blank' rel='noreferrer' className=" me-2 ">Github</a>
                        </li>
                        <li>
                            <a href="https://web.facebook.com/nayana.weligalla" target='_blank' rel='noreferrer' className=" me-2">Facebook</a>
                        </li>
                        <li>
                            <a href="https://medium.com/@nweligalla" target='_blank' rel='noreferrer' className="">Medium</a>
                        </li>
                    </ul>
                </div>
            </footer>

        )
    }

export default Footer