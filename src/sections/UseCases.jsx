import React from 'react'
import colors from '../data/colors'
import useCasesData from '../data/use-cases-data'
import UseCasesFields from '../components/UseCasesFields'

const UseCases = () => {
  const primaryColor = colors.primaryColor
  const data = useCasesData

  return (
    <section id='use-cases' className='bg-black w-full flex flex-col items-center mt-16'>
      <div className='max-w-[1440px] w-full mx-auto flex flex-col items-center px-4 md:px-8 py-4'>
        <h2
          className='mt-8 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight'
          style={{ color: primaryColor }}
        >
          Payments Use Cases
        </h2>

        <p className='mt-3 max-w-xl text-center text-sm md:text-lg font-light leading-relaxed text-white'>
          One Gateway for all your use cases
        </p>

        <div className='mt-10 mb-12 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5'>
          {data?.map(({ image, title }) => (
            <UseCasesFields key={title} image={image} title={title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
