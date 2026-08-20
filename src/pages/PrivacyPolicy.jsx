import React from 'react'
import PolicyContainer from '../components/PolicyContainer'
import { getPrivacyPolicy } from '../data/privacy-policy'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import usePageMeta from '../utils/usePageMeta'

const PrivacyPolicy = () => {
  const data = getPrivacyPolicy

  usePageMeta({
    title: 'Privacy Policy',
    description:
      "Learn how Tapseed Payments collects, uses, and protects personal data under Zimbabwe's Cyber and Data Protection Act and, where applicable, the EU GDPR.",
    path: '/privacy-policy',
  })

  return (
    <>
      <Header prefix='/' showHero={false} />
      <PolicyContainer title={"Privacy Policy"}>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>Privacy Policy</h1>
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
                        <PolicyPoints key={point} point={point} />
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

export default PrivacyPolicy
