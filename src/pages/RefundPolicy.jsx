import React from 'react'
import PolicyContainer from '../components/PolicyContainer'
import { getRefundPolicy } from '../data/refund-policy'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import PolicyPoints from '../components/PolicyPoints'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import usePageMeta from '../utils/usePageMeta'

const RefundPolicy = () => {
  const data = getRefundPolicy

  usePageMeta({
    title: 'Refund Policy',
    description:
      'Tapseed Payments Refund Policy covering eligibility, timelines, chargebacks, and merchant responsibilities for card and alternative payment refunds.',
    path: '/refund-policy',
  })

  return (
    <>
      <Header prefix='/' showHero={false} />
      <PolicyContainer title={"Refund Policy"}>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>Refund Policy</h1>
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

export default RefundPolicy
