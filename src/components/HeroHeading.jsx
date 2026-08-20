import React from 'react'
import colors from '../data/colors'

const SIGNUP_URL =
  'https://secure.appletreepayments.com/merchant/signup.jsp?partnerid=84&fromtype=Appletree'
const DOCS_URL = 'https://docs.appletreepayments.com/integration/index.php'

const HeroHeading = () => {
  const textColor = colors.primaryColor
  const accent = colors.accentColor

  return (
    <div className='flex flex-col justify-center h-full max-w-xl lg:max-w-2xl'>
      <h1
        style={{ color: accent }}
        className='mt-4 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight'
      >
        Activating<span style={{ color: textColor }}> Africa's</span>
        <br />
        <span style={{ color: textColor }}>Digital</span>
        <span> Economy</span>
      </h1>

      <p className='text-gray-300 mt-5 md:mt-6 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg'>
        Your gateway to Africa's digital economy, with seamless collections and
        payouts across the continent and beyond.
      </p>

      <div className='flex flex-wrap items-center gap-3 md:gap-4 mt-8 md:mt-10'>
        <a
          href={SIGNUP_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold text-black rounded-lg transition hover:brightness-110'
          style={{ backgroundColor: textColor }}
        >
          Get started
        </a>
        <a
          href={DOCS_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-medium text-gray-200 rounded-lg border border-gray-600 transition hover:border-gray-400 hover:text-white'
        >
          View docs
        </a>
      </div>
    </div>
  )
}

export default HeroHeading
