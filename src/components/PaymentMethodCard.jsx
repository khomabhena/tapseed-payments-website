import React from 'react'

const PaymentMethodCard = ({ image, title }) => {
  return (
    <div className='min-w-34 h-14 rounded-xl flex justify-center items-center'>
      <img
        className='cursor-pointer rounded-2xl max-h-14 w-auto'
        src={image}
        alt={title}
        width={120}
        height={56}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default PaymentMethodCard
