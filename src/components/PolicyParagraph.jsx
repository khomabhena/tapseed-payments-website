import React from 'react'

const PolicyParagraph = ({ paragraph }) => {
  if (!paragraph) return null

  return (
    <p className='text-sm md:text-base lg:text-lg mt-4 text-gray-800 leading-relaxed'>
      {paragraph}
    </p>
  )
}

export default PolicyParagraph
