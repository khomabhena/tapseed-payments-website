import React from 'react'
import colors from '../data/colors'

const AboutLeaves = ({ number = 1, country }) => {
  const primaryColor = colors.primaryColor

  return (
    <div className='flex flex-col items-center gap-4 min-w-36'>
      <div
        className='w-25 h-25 flex justify-center items-center rounded-tl-[40px] rounded-br-[40px]'
        style={{ backgroundColor: primaryColor }}
      >
        <p className='text-gray-200 font-bold text-6xl'>{number}</p>
      </div>
      <p className='text-center w-full font-bold text-xl' style={{ color: primaryColor }}>
        {country}
      </p>
    </div>
  )
}

export default AboutLeaves
