import React from 'react'
import { getTermsAndConditionsData } from '../data/terms-and-conditions'
import Header from '../sections/Header'
import PolicyContainer from '../components/PolicyContainer'
import Footer from '../sections/Footer'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'
import usePageMeta from '../utils/usePageMeta'

const TermsAndConditions = () => {
  const data = getTermsAndConditionsData

  usePageMeta({
    title: 'Terms and Conditions',
    description:
      'Read the Tapseed Payments Terms and Conditions governing use of the payment platform, accounts, fees, refunds, and Card Scheme compliance.',
    path: '/terms-and-conditions',
  })

  return (
    <>
      <Header prefix='/' showHero={false} />
      <PolicyContainer title={"Terms and Conditions"}>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>Terms and Conditions</h1>
        {
          data?.map(({ title, titleNumber, paragraphs }) => (
            <div key={`${titleNumber}-${title}`}>
              <PolicyHeading title={title} titleNumber={titleNumber} />
              {
                paragraphs?.map(({ paragraph, points }, idx) => (
                  <div key={idx}>
                    {paragraph ? <PolicyParagraph paragraph={paragraph} /> : null}
                    {
                      points?.map(({ point }) => (
                        point != '' && <PolicyPoints key={point} point={point} />
                      ))
                    }
                  </div>
                ))
              }
            </div>
          ))
        }
      </PolicyContainer>
      <Footer />
    </>
  )
}

export default TermsAndConditions
