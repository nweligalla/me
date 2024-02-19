import React from 'react'


type Props = {
    imgUrl: string,
    url: string,
    name: string,
}

function BadgeCard({ imgUrl, url, name }: Props) {
    return (
        <a href={url} target='_blank' rel="noreferrer">
            <div className='badge-card'>
                <img src={imgUrl} alt={name} />
            </div>
        </a>
    )
}

export default BadgeCard