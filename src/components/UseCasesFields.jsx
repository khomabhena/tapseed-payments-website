import React from 'react'
import colors from '../data/colors'

const UseCasesFields = ({ image, title }) => {
  return (
    <article className='group flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/5 px-4 py-6 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(160,217,0,0.45)] hover:bg-white/8 hover:shadow-[0_12px_32px_rgba(160,217,0,0.08)]'>
      <img
        className='h-20 w-20 md:h-24 md:w-24 object-contain'
        src={image}
        alt=''
        width={96}
        height={96}
        loading='lazy'
        decoding='async'
      />
      <h3
        className='mt-4 text-sm md:text-base font-semibold tracking-wide text-white'
        style={{ color: colors.primaryColor }}
      >
        {title}
      </h3>
    </article>
  )
}

export default UseCasesFields
