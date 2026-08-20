import React from 'react'
import Navigation from '../components/Navigation'
import Hero from './Hero'

const Header = ({ prefix = '', showHero = true }) => {
  return (
    <header id='header'>
      <Navigation prefix={prefix} />
      {showHero ? <Hero /> : null}
    </header>
  )
}

export default Header
