import React from 'react'

function SocialLink({icon}) {
  return (
    <img src={icon} className='w-8 h-8 cursor-pointer sm:h-5 sm:w-5 md:h-6 md:w-6 transition-all duration-200 hover:scale-110 flex items-center' />
  )
}

export default SocialLink;