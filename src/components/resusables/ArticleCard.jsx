import React from 'react'

function ArticleCard({name,url,thumbnail}) {
  return (
    <div style={{ backgroundImage: `url(${thumbnail})` }} className='shadow-lg shadow-[#040c16] group container flex justify-center items-center content-div'>

      {/* hover effects */}
      <div className='opacity-0 group-hover:opacity-100 p-3 duration-300'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          {name.trim()}
        </span>
        <div className='pt-8 text-center'>
          <a href={url} target='_blank' rel="noreferrer">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-lg text-lg'>Read more</button>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default ArticleCard