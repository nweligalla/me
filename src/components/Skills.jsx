import React,{useEffect} from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import AOS from 'aos';
import 'aos/dist/aos.css'
function Skills() {


    useEffect(()=>{
        AOS.init({duration:1000})
    },[])


    return (
        <div name='skills' className='w-full min-h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='section-title'>Skills</p>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, accusamus.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={HTML} alt="HTML icon" />
                        <p >HTML</p>
                    </div>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={CSS} alt="HTML icon" />
                        <p >CSS</p>
                    </div>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={JavaScript} alt="HTML icon" />
                        <p >JAVASCRIPT</p>
                    </div>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={ReactImg} alt="HTML icon" />
                        <p >REACT</p>
                    </div>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={GitHub} alt="HTML icon" />
                        <p >GITHUB</p>
                    </div>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={Node} alt="HTML icon" />
                        <p >NODE JS</p>
                    </div>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={Mongo} alt="HTML icon" />
                        <p >MONGO DB</p>
                    </div>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={Tailwind} alt="HTML icon" />
                        <p >TAILWIND</p>
                    </div>
                    <div data-aos="flip-up" className='skill-card'>
                        <img src={FireBase} alt="HTML icon" />
                        <p>FIREBASE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills