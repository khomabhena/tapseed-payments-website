import React, { useContext } from 'react'
import colors from '../data/colors'
import MyContext from '../context/MyContext'

const MobileNavigation = () => {
  const textColor = colors.primaryColor
  const {mobileNav, setMobileNav} = useContext(MyContext)

  const closeNavigation = () => {
    console.log('Navi close')
    setMobileNav(!mobileNav)
  }

  return (
    <nav className=' bg-black lg:hidden fixed px-4 top-0 z-20 left-0 right-0 md:w-[384px] bottom-0'>

      <div className='flex justify-between h-18 items-center'>
        <img
          className='cursor-pointer h-10 md:h-12 w-auto object-contain'
          src="/tapseed-payments-logo-white.png"
          alt="Tapseed Payments"
          width={180}
          height={48}
          decoding="async"
        />
        <img
          onClick={() => { setMobileNav(!mobileNav) }}
          className='cursor-pointer h-8 md:h-10'
          src='/close-icon-white.svg'
          alt='Close menu'
          width={32}
          height={32}
        />
      </div>
    
      <ul className={`bg-black flex flex-col h-full mt-12 md:pl-8 items-center md:items-start gap-y-8 text-base md:text-xl lg:text-2xl`} style={{color: textColor}}>
        <li><a onClick={() => closeNavigation()} href="#payment-solutions">Payment Solutions</a></li>
        <li><a onClick={() => closeNavigation()} href="#use-cases">Use Cases</a></li>
        <li><a onClick={() => closeNavigation()} href="#payment-methods">Payment Methods</a></li>
        <li><a onClick={() => closeNavigation()} href="#about">About</a></li>
        <li><a onClick={() => closeNavigation()} href="#contact">Contact</a></li>
      </ul>

    </nav>
  )
}

export default MobileNavigation
