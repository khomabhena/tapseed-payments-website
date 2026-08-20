import React from 'react'

const PolicyPoints = ({ point }) => {
  if (!point) return null

  return (
    <div className='ml-1 md:ml-2 flex items-start gap-3 mt-2'>
      <span className='text-base md:text-lg leading-relaxed shrink-0' aria-hidden='true'>
        &bull;
      </span>
      <p className='text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed'>{point}</p>
    </div>
  )
}

export default PolicyPoints
