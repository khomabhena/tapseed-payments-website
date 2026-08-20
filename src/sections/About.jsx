import React from 'react'
import colors from '../data/colors'
import AboutLeaves from '../components/AboutLeaves'
import aboutNumbers from '../data/about-numbers'

const highlights = [
  {
    title: 'Global commerce tools',
    body: 'Tapseed Payments provides end-to-end global commerce tools that merchants need to build businesses, accept payments and enable commerce for their users on Websites, Mobile Apps, Crowdfunding Apps, Marketplaces, Platforms and Fintechs.',
  },
  {
    title: 'Africa 1st strategy',
    body: 'With an Africa 1st strategy, we give innovators next-gen payment solutions and enable merchants in 79+ Countries to accept, split payments and automate payouts online in 100+ currencies and multiple payment methods.',
  },
  {
    title: 'APIs & white-label',
    body: 'Our developer-friendly API and White-Label solutions can be easily integrated into any design to power payments: Websites, Apps, Marketplaces, Platforms and Fintechs.',
  },
]

const About = () => {
  const data = aboutNumbers
  const textLight = colors.primaryLight

  return (
    <section id='about' className='w-full flex flex-col items-center mt-16 mb-16'>
      <div className='max-w-[1440px] w-full mx-auto flex flex-col items-center px-4 md:px-8'>
        <h2 className='mt-8 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight'>
          About
        </h2>

        <div className='mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5'>
          {highlights.map(({ title, body }) => (
            <article
              key={title}
              className='rounded-2xl border border-black/8 bg-white p-5 md:p-6 transition duration-200 hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_12px_32px_rgba(18,28,0,0.08)]'
            >
              <h3 className='text-base md:text-lg font-semibold tracking-tight text-black'>
                {title}
              </h3>
              <p
                className='mt-2 text-sm md:text-[15px] leading-relaxed'
                style={{ color: textLight }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>

        <section className='flex px-2 md:px-4 mt-16 gap-4 w-full items-center flex-wrap justify-evenly'>
          {data?.map(({ country, number }) => (
            <AboutLeaves key={country} country={country} number={number} />
          ))}
        </section>
      </div>
    </section>
  )
}

export default About
