import React from 'react'
import articles from '../data/articleList'
import ArticleCard from './resusables/ArticleCard'

function Articles() {
    return (
        <div name='work' className='w-full '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='section-title'>Articles</p>
                    <a href="https://medium.com/@nweligalla" target='_blank' rel='noreferrer'><p className='py-6'>medium.com/@nweligalla</p></a>
                </div>
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* grid item */}
                    {
                        articles.map(({ name, url, thumbnail }) => {
                            return (
                                <ArticleCard
                                    name={name}
                                    url={url}
                                    thumbnail={thumbnail}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Articles