import React from 'react'
import colors from '../data/colors'
import getPointerData from '../data/pointer-icons'

const QuickLinks = () => {
  const data = getPointerData
  const accent = colors.primaryColor

  return (
    <section
      id='quick-links'
      className='w-full border-t border-b'
      style={{ backgroundColor: '#0a0a0a', borderColor: '#1f1f1f' }}
      aria-label='Quick links'
    >
      <div className='max-w-[1440px] mx-auto px-4 md:px-8 py-3 md:py-4'>
        <ul className='flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-3'>
          {data?.map(({ image, link, title }) => (
            <li key={title}>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center gap-2 text-sm text-white transition hover:brightness-110'
              >
                <img
                  src={image}
                  alt=''
                  width={24}
                  height={24}
                  loading='lazy'
                  decoding='async'
                  className='w-6 h-6'
                />
                <span
                  className='font-medium tracking-wide group-hover:underline underline-offset-4'
                  style={{ textDecorationColor: accent }}
                >
                  {title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default QuickLinks
