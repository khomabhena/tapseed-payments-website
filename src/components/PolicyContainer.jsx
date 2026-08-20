import React from 'react'

const PolicyContainer = ({ children }) => {
  return (
    <div className='text-gray-900 w-full bg-white'>
      <section className='px-4 md:px-8 mx-auto pt-24 pb-24 min-h-screen max-w-[1080px]'>
        {children}
      </section>
    </div>
  )
}

export default PolicyContainer
