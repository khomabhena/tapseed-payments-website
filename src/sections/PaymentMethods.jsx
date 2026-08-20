import React from 'react'
import colors from '../data/colors'
import paymentMethodsOffered from '../data/payment-methods'
import PaymentMethodCard from '../components/PaymentMethodCard'
import 'react-slideshow-image/dist/styles.css'

const PaymentMethods = () => {
    const colorPrimary = colors.primaryColor
    const textLight = colors.primaryLight
    const data = paymentMethodsOffered

  return (
    <section id='payment-methods' className='-z-10 w-full flex flex-col items-center pb-12' style={{ backgroundColor: colorPrimary }}>
      <div className='max-w-[1440px] w-full mx-auto flex flex-col items-center px-4 lg:px-12'>
        <h2 className='text-xl md:text-2xl lg:text-3xl pt-12 font-bold'>Payment Methods</h2>
        
        <h3 style={{ color: textLight }} className='mt-2 text-center text-lg md:text-2xl lg:text-3xl font-extralight'>Local and International Cards <br />Instant Bank Transfers, Mobile Money</h3>
      
        <section className='w-full overflow-scroll payment-method-scroll mt-16 flex gap-y-4 gap-4 min-h-16 justify-between items-center'>
          {
            data?.map(({image, title}) => (
              <PaymentMethodCard key={title} image={image} title={title} />
            ))
          }
        </section>
      </div>
    </section>
  )
}

export default PaymentMethods
