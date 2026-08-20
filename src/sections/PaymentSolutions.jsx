import React from 'react'
import colors from '../data/colors'
import PaymentSolutionsFields from '../components/PaymentSolutionsFields'
import paymentSolutionsData from '../data/payment-solutions'

const PaymentSolutions = () => {
  const textLight = colors.primaryLight
  const data = paymentSolutionsData

  return (
    <section id='payment-solutions' className='w-full flex flex-col items-center mt-4 md:mt-8'>
      <div className='max-w-[1440px] w-full mx-auto flex flex-col items-center px-4 md:px-8'>
        <h2 className='mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight'>
          Payment Solutions
        </h2>

        <p
          style={{ color: textLight }}
          className='mt-3 max-w-xl text-center text-sm md:text-lg font-light leading-relaxed'
        >
          Everything you need to launch and scale your business in one place
        </p>

        <div className='mt-8 lg:mt-12 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5'>
          {data?.map(({ image, title, desc }) => (
            <PaymentSolutionsFields key={title} image={image} desc={desc} title={title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentSolutions
