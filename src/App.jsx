import { useState } from 'react'
import './App.css'
import Container from './pages/Container'
import MyContext from './context/MyContext'
import { Route, Routes } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ProhibitedBusinesses from './pages/ProhibitedBusinesses'
import TermsAndConditions from './pages/TermsAndConditions'
import RefundPolicy from './pages/RefundPolicy'
import AcceptableUsePolicy from './pages/AcceptableUsePolicy'

function App() {

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
    <MyContext.Provider value={{mobileNav, setMobileNav}}>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/acceptable-use-policy' element={<AcceptableUsePolicy />} />
        <Route path='/prohibited-businesses' element={<ProhibitedBusinesses />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      </Routes>
    </MyContext.Provider>
    </>
  )
}

export default App
