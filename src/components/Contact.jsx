import React from 'react'

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/67774955-b112-4df7-bffe-4c79afbf87d4" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl inline border-b-4 border-pink-600 '>Contact</p>
                    <p className='py-4'>// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, accusamus.</p>

                </div>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            
                <button className='text-white border-2 hover:bg-pink-600 hover:hover-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lorem, ipsum</button>
            
            </form>
        </div>
    )
}

export default Contact