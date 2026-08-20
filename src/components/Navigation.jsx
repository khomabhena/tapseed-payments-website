import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import colors from '../data/colors'

const Navigation = ({ prefix = '' }) => {
   const {mobileNav, setMobileNav} = useContext(MyContext)
   const textColor = colors.primaryColor
   

  return (
    <nav className='fixed top-0 left-0 right-0 bg-black z-20 overflow-hidden'>
      <div className='max-w-[1440px] mx-auto flex justify-between items-center px-4 h-18'>
        <a href="/" className='flex items-center h-full py-2'>
          <img
            className='cursor-pointer h-10 md:h-12 w-auto object-contain'
            src="/tapseed-payments-logo-white.png"
            alt="Tapseed Payments"
            width={180}
            height={48}
            decoding="async"
          />
        </a>

        <ul className='hidden lg:flex gap-8 text-base pr-4' style={{ color: textColor }}>
          <li className='hover:text-green-800 hover:scale-105'><a href={`${prefix}#payment-solutions`}>Payment Solutions</a></li>
          <li className='hover:text-green-800 hover:scale-105'><a href={`${prefix}#use-cases`}>Use Cases</a></li>
          <li className='hover:text-green-800 hover:scale-105'><a href={`${prefix}#payment-methods`}>Payment Methods</a></li>
          <li className='hover:text-green-800 hover:scale-105'><a href={`${prefix}#about`}>About</a></li>
          <li className='hover:text-green-800 hover:scale-105'><a href={`${prefix}#contact`}>Contact</a></li>
        </ul>

        {!mobileNav && <img onClick={() => {setMobileNav(!mobileNav)}} className='lg:hidden cursor-pointer h-8 w-8' src='/menu-icon-white.svg' width={'auto'} height={'24px'} alt='menu close icon'  />}
        {mobileNav && <img onClick={() => {setMobileNav(!mobileNav)}} className='lg:hidden cursor-pointer h-10 w-10' src='/close-icon-white.svg' width={'auto'} height={'32px'} alt='menu close icon'  />}
      </div>
    </nav>
  )
}

export default Navigation
