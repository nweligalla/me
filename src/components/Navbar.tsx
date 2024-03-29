import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaMedium, FaCodepen } from 'react-icons/fa'
import { FaXTwitter,FaHackerrank } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.webp'
import { Link } from 'react-scroll';


function Navbar() {


    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed z-50 w-full h-[80px] flex justify-between items-center px-4 text-[#F0ECE5]'>
            <div className="">
                <img className='w-[50px]' src={Logo} alt="logo" />
            </div>
            {/* menu */}

            <ul className='hidden md:flex'>

                <li><Link to="home" smooth={true} duration={500} > Home </Link></li>
                <li><Link to="about" smooth={true} duration={500} >About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} >Projects</Link></li>
                <li><Link to="articles" smooth={true} duration={500} >Articles</Link></li>
            </ul>

            {/* menu icon */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile icon */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500} > Home </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} >About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500} >Skills</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects" smooth={true} duration={500} >Projects</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="articles" smooth={true} duration={500} >Articles</Link></li>
            </ul>
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[25%] left-0">
                <ul>
                    <li className='social-icon bg-[#0077B5]'>
                        <a href="https://www.linkedin.com/in/nweligalla/" target='_blank' rel='noreferrer'>
                            Linkedin
                            <FaLinkedin size={30} />
                        </a>
                    </li>


                    <li className='social-icon bg-[#292929]'>
                        <a href="https://medium.com/@nweligalla" target='_blank' rel='noreferrer'>
                            Medium
                            <FaMedium size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#24292e]'>
                        <a href="https://github.com/nweligalla" target='_blank' rel='noreferrer'>
                            Github
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#1E1F26]'>
                        <a href="https://codepen.io/nweligalla" target='_blank' rel='noreferrer'>
                            Codepen
                            <FaCodepen size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#000]'>
                        <a href="https://twitter.com/NWeligalla" target='_blank' rel='noreferrer'>
                            X
                            <FaXTwitter size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#316FF6]'>
                        <a href="https://web.facebook.com/nayana.weligalla" target='_blank' rel='noreferrer'>
                            Facebook
                            <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#32C766]'>
                        <a href="https://www.hackerrank.com/profile/nweligalla" target='_blank' rel='noreferrer'>
                            Hackerank
                            <FaHackerrank size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#33A9F7]'>
                        <a href="mailto:nayanaweligalla@gmail.com">
                            Email
                            <HiOutlineMail size={30} />
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div >
    )
}

export default Navbar