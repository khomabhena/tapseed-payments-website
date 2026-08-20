import React, { useContext } from 'react'
import MainPage from './MainPage'
import MobileNavigation from '../components/MobileNavigation'
import MyContext from '../context/MyContext'
import Header from '../sections/Header'
import QuickLinks from '../sections/QuickLinks'
import PaymentSolutions from '../sections/PaymentSolutions'
import UseCases from '../sections/UseCases'
import PaymentMethods from '../sections/PaymentMethods'
import About from '../sections/About'
import ContactUs from '../sections/ContactUs'
import Footer from '../sections/Footer'
import { HOME_META } from '../utils/setPageMeta'
import usePageMeta from '../utils/usePageMeta'

const Container = () => {
  const { mobileNav } = useContext(MyContext)
  usePageMeta(HOME_META)

  return (
    <>
      {mobileNav && <MobileNavigation />}
      <MainPage>
        <Header />
        <QuickLinks />
        <PaymentSolutions />
        <UseCases />
        <PaymentMethods />
        <About />
        <ContactUs />
        <Footer />
      </MainPage>
    </>
  )
}

export default Container
