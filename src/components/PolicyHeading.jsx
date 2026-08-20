import React from 'react'

const PolicyHeading = ({ title, titleNumber }) => {
  return (
    <h2 className='text-lg md:text-xl mt-8 font-bold text-gray-900'>
      {titleNumber ? <span className='mr-2'>{titleNumber}</span> : null}
      {title}
    </h2>
  )
}

export default PolicyHeading
