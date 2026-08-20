import React from 'react'
import PolicyContainer from '../components/PolicyContainer'
import { getAcceptableUsePolicy } from '../data/acceptable-use-policy'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import usePageMeta from '../utils/usePageMeta'

const AcceptableUsePolicy = () => {
  const data = getAcceptableUsePolicy

  usePageMeta({
    title: 'Acceptable Use Policy',
    description:
      'Tapseed Payments Acceptable Use Policy — rules for merchants and users covering prohibited activities, restricted businesses, and platform security.',
    path: '/acceptable-use-policy',
  })

  return (
    <>
      <Header prefix='/' showHero={false} />
      <PolicyContainer title={"Acceptable Use Policy"}>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>Acceptable Use Policy</h1>
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

export default AcceptableUsePolicy
