import React from 'react'
import { getProhibitedBusinesses } from '../data/prohibited-businesses'
import PolicyContainer from '../components/PolicyContainer'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import usePageMeta from '../utils/usePageMeta'

const ProhibitedBusinesses = () => {
  const data = getProhibitedBusinesses

  usePageMeta({
    title: 'Prohibited Businesses',
    description:
      'Businesses and activities that cannot be processed through Tapseed Payments due to law, Card Scheme rules, or partner requirements.',
    path: '/prohibited-businesses',
  })

  return (
    <>
      <Header prefix='/' showHero={false} />
      <PolicyContainer title={"Prohibited Businesses"}>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>Prohibited Businesses</h1>
        {
          data?.map(({ title, titleNumber, paragraphs }) => (
            <div key={`${titleNumber}-${title}`}>
              <PolicyHeading title={title} titleNumber={titleNumber} />
              {
                paragraphs?.map(({ paragraphs: body, points }, idx) => (
                  <div key={idx}>
                    <PolicyParagraph paragraph={body} />
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

export default ProhibitedBusinesses
