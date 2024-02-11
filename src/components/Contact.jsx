import React from 'react'

function Contact() {
    return (
        <div name='contact' className='w-full h-screen   flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/67774955-b112-4df7-bffe-4c79afbf87d4" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='section-title'>Contact</p>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, accusamus.</p>

                </div>
                <input required className='my-4 p-2 bg-[#ECECEC]' type="text" placeholder='Name' name='name' />
                <input required className='my-4 p-2 bg-[#ECECEC]' type="text" placeholder='Email' name='email' />
                <textarea required className='bg-[#ECECEC] p-2' name="message" rows="10" placeholder='Message'></textarea>
            
                <button className='text-[#ECECEC] border-2 border-[#ECECEC] hover:text-[#142D4C] hover:bg-[#9FD3C7] hover:border-[#9FD3C7] px-4 py-3 my-8 mx-auto flex items-center duration-200'>Submit</button>
            
            </form>
        </div>
    )
}

export default Contact