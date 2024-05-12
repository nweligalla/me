import React, { useEffect } from 'react'
import badges from '../data/badgeList';
import AOS from 'aos';
import 'aos/dist/aos.css'
import BadgeCard from './resusables/BadgeCard';


function Badges() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])


  return (
    <div className='w-full'>
      <div data-aos="fade-up" className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='section-title'>Badges</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {
            badges.map(({ badgeImg, badgeUrl, badgeName,className }, index) => {
              return (
                <BadgeCard key={index} imgUrl={badgeImg} url={badgeUrl} name={badgeName} className={className} />
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Badges