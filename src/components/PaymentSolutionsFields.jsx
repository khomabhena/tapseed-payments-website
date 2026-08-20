import React from 'react'
import colors from '../data/colors'

const PaymentSolutionsFields = ({ image, title, desc }) => {
  return (
    <article className='group flex gap-4 rounded-2xl border border-black/8 bg-white p-5 md:p-6 transition duration-200 hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_12px_32px_rgba(18,28,0,0.08)]'>
      <div
        className='flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl'
        style={{ backgroundColor: colors.primaryColor }}
      >
        <img
          className='h-7 w-7 md:h-8 md:w-8'
          src={image}
          alt=''
          width={32}
          height={32}
          loading='lazy'
          decoding='async'
        />
      </div>
      <div className='min-w-0'>
        <h3 className='text-base md:text-lg font-semibold tracking-tight text-black'>
          {title}
        </h3>
        <p className='mt-1 text-sm md:text-[15px] leading-relaxed text-neutral-600'>
          {desc}
        </p>
      </div>
    </article>
  )
}

export default PaymentSolutionsFields
