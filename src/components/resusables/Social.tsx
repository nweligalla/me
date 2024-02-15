import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaMedium, FaCodepen } from 'react-icons/fa'
import { FaXTwitter, FaHackerrank } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";

function Social() {
    return (
        <ul className="md:hidden flex flex-wrap justify-center mt-16 gap-5">
            <li>
                <a href="https://www.linkedin.com/in/nweligalla/" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <FaLinkedin className="w-10 h-10" />
                </a>
            </li>
            <li>
                <a href="https://medium.com/@nweligalla" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <FaMedium className="w-10 h-10" />
                </a>
            </li>
            <li>
                <a href="https://github.com/nweligalla" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <FaGithub className="w-10 h-10" />
                </a>
            </li>
            <li>
                <a href="https://codepen.io/nweligalla" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <FaCodepen className="w-10 h-10" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/NWeligalla" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <FaXTwitter className="w-10 h-10" />
                </a>
            </li>
            <li>
                <a href="https://web.facebook.com/nayana.weligalla" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <FaFacebook className="w-10 h-10" />
                </a>
            </li>
            <li>
                <a href="https://www.hackerrank.com/profile/nweligalla" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <FaHackerrank className="w-10 h-10" />
                </a>
            </li>
            <li>
                <a href="mailto:nayanaweligalla@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <IoIosMailOpen size={30} className="w-10 h-10" />
                </a>
            </li>
        </ul>
    )
}

export default Social