import React from 'react'

import WorkIm from '../assets/projects/workImg.jpeg'
import RealEst from '../assets/projects/realestate.jpg'


function Work() {
    return (
        <div name='work' className='w-full md:h-screen '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='section-title'>Work</p>
                    <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsam?</p>
                </div>
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* grid item */}
                    <div style={{ backgroundImage: `url(${WorkIm})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Lorem ipsum dolor
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${RealEst})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Lorem ipsum dolor
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkIm})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Lorem ipsum dolor
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${RealEst})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Lorem ipsum dolor
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkIm})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Lorem ipsum dolor
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${RealEst})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Lorem ipsum dolor
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Work