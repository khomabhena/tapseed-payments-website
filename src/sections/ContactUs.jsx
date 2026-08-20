import React from 'react'
import colors from '../data/colors'

const socialLinks = [
  { href: 'https://facebook.com', src: '/social-media/social-facebook.webp', alt: 'Facebook' },
  { href: 'https://instagram.com', src: '/social-media/social-instagram.webp', alt: 'Instagram' },
  { href: 'https://linkedin.com', src: '/social-media/social-linkedin.webp', alt: 'LinkedIn' },
  { href: 'https://x.com', src: '/social-media/social-x.webp', alt: 'X' },
]

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/45 outline-none transition focus:border-[rgba(160,217,0,0.7)]'

const ContactUs = () => {
  const primaryColor = colors.primaryColor

  return (
    <section id='contact' className='w-full flex flex-col bg-black items-center mt-16 pb-24'>
      <div className='max-w-[1440px] w-full mx-auto flex flex-col items-center px-4 md:px-8'>
        <h2
          className='mt-8 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white'
        >
          Contact Us
        </h2>

        <div className='mt-10 mb-4 w-full grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6'>
          <article className='lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-white'>
            <p className='text-2xl font-semibold' style={{ color: primaryColor }}>
              Zimbabwe
            </p>
            <div className='mt-6 space-y-1 text-lg text-white/90'>
              <p>Tapseed Payments</p>
              <p>191 Enterprise Road</p>
              <p>Chisipite</p>
              <p>Harare</p>
            </div>
            <a
              href='mailto:info@appletreepayments.com'
              className='mt-8 inline-block text-lg text-white/90 transition hover:text-white'
            >
              info&#x40;appletreepayments&#46;com
            </a>
            <ul className='flex gap-3 mt-6'>
              {socialLinks.map(({ href, src, alt }) => (
                <li key={alt}>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={href}
                    className='block transition hover:opacity-80'
                  >
                    <img
                      width={40}
                      height={40}
                      loading='lazy'
                      decoding='async'
                      src={src}
                      alt={alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <form
            action='mailto:info@appletreepayments.com'
            className='lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col gap-4'
          >
            <input
              className={fieldClass}
              placeholder='Full Name'
              type='text'
              name='Full Name'
              autoComplete='name'
            />
            <input
              className={fieldClass}
              placeholder='Email'
              type='email'
              name='Email'
              autoComplete='email'
            />
            <input
              className={fieldClass}
              placeholder='Mobile Number'
              type='tel'
              name='Mobile Number'
              autoComplete='tel'
            />
            <textarea
              className={`${fieldClass} min-h-28 resize-y`}
              placeholder='Your Message'
              rows='4'
              name='Your Message'
            />
            <button
              type='submit'
              className='self-end cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110'
              style={{ backgroundColor: primaryColor }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
