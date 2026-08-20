import React from 'react'
import HeroHeading from '../components/HeroHeading'

const Hero = () => {
  return (
    <section id='hero' className='bg-black mt-18 w-full overflow-hidden'>
      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 px-8 pt-12 pb-14 md:pt-16 md:pb-20 min-h-[70vh] md:min-h-[560px]'>
        <article className='w-full md:w-[48%] shrink-0'>
          <HeroHeading />
        </article>
        <article className='w-full md:w-[52%] flex items-center justify-center min-h-0'>
          <img
            src="/hero-image.webp"
            alt="Payment methods on a mobile device"
            width={1200}
            height={900}
            fetchPriority="high"
            decoding="async"
            className='w-full max-h-[380px] md:max-h-[520px] object-contain'
          />
        </article>
      </div>
    </section>
  )
}

export default Hero
