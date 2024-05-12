import React from 'react'


type Props = {
    imgUrl: string,
    url: string,
    name: string,
    className?: string;
}

function BadgeCard({ imgUrl, url, name, className }: Props) {
    return (
        <a href={url} target='_blank' rel="noreferrer">
            <div className='badge-card'>
                <img src={imgUrl} alt={name} className={`${className}`} />
            </div>
        </a>
    )
}

export default BadgeCard