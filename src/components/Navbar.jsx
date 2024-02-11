import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaMedium, FaCodepen } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';


function Navbar() {


    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed z-50 w-full h-[80px] flex justify-between items-center px-4 text-[#F0ECE5]'>
            <div className="">
                <img className='w-[50px]' src={Logo} alt="" />
            </div>
            {/* menu */}

            <ul className='hidden md:flex'>

                <li><Link to="home" smooth={true} duration={500} > Home </Link></li>
                <li><Link to="about" smooth={true} duration={500} >About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} >Skills</Link></li>
                <li><Link to="work" smooth={true} duration={500} >Work</Link></li>
                <li><Link to="contact" smooth={true} duration={500} >Contact</Link></li>
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
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500} >Work</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >Contact</Link></li>
            </ul>
            {/* social icons */}
            <div className="hidden lg:flex fixed flex-col top-[25%] left-0">
                <ul>
                    <li className='social-icon bg-[#0077B5]'>
                        <a href="/">
                            Linkedin
                            <FaLinkedin size={30} />
                        </a>
                    </li>


                    <li className='social-icon bg-[#292929]'>
                        <a href="/">
                            Medium
                            <FaMedium size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#24292e]'>
                        <a href="/">
                            Github
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#1E1F26]'>
                        <a href="/">
                            Codepen
                            <FaCodepen size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#000]'>
                        <a href="/">
                            X
                            <FaXTwitter size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#316FF6]'>
                        <a href="/">
                            Facebook
                            <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#6fc2b0]'>
                        <a href="/">
                            Email
                            <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='social-icon bg-[#565f69]'>
                        <a href="/">
                            Resume
                            <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar