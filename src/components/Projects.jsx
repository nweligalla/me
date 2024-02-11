import React, { useEffect } from 'react'
import ProjectCard from './resusables/ProjectCard';
import projectList from '../data/projectList.js'
import AOS from 'aos';
import Slider from "react-slick";
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Projects() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const settings = {
        dots: true,
        infinite: false,
        rows: 3,
        slidesToShow: 1,
        vertical: true,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    rows: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesToScroll: 1
                }
            }]
    };


    return (
        <div name='experience' className='w-full h-screen'>
            <div data-aos="zoom-in" className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-center'>
                    <p className='section-title '>Projects</p>
                </div>

                <div className='w-[90%] mx-auto mt-6'>
                    <Slider {...settings}>
                        {projectList.toReversed().map(({ projectName, description, time, techStack, associate }) => {
                            return (
                                <ProjectCard
                                    time={time}
                                    projectName={projectName}
                                    description={description}
                                    techStack={techStack}
                                    associate={associate}
                                />
                            )
                        })}

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Projects