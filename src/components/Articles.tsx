import React, { useEffect } from 'react'
import articles from '../data/articleList'
import ArticleCard from './resusables/ArticleCard'
import AOS from 'aos';
import Slider, { Settings } from 'react-slick';
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Element } from 'react-scroll';

function Articles() {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    const settings: Settings = {
        dots: true,
        infinite: true,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 500,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Element name="articles" >
            <div className='w-[80%] mx-auto h-screen'>
                <div data-aos="zoom-in" className='max-w-[1000px] mx-auto p-4 mt-6 flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <p className='section-title'>Articles</p>
                        <a href="https://medium.com/@nweligalla" target='_blank' rel='noreferrer'><p className='py-6'>medium.com/@nweligalla</p></a>
                    </div>

                    <Slider {...settings}>
                        {
                            articles.map(({ name, url, thumbnail }, index) => {
                                return (
                                    <ArticleCard
                                        key={index}
                                        name={name}
                                        url={url}
                                        thumbnail={thumbnail}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </Element>
    )
}

export default Articles