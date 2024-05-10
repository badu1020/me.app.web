'use client'

import { Container } from '@/components/Container'
import { FadeIn } from './FadeIn'
import { CircleBackground } from './CircleBackground'


export function AboutUs() {

  return (

    <section
      id="aboutus"
      className="relative overflow-show py-12 overflow-hidden"
    >

      <Container className="relative">
        <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
          <CircleBackground color="#d62976" className="animate-spin-slower" />
        </div>
        <FadeIn>
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-2 lg:gap-y-20'>
            <div className='lg:col-span-2'>
              <div className='backdrop-blur-sm bg-gray text-white'>
                <p
                  id="aboutus-title"
                  className="text-4xl font-medium tracking-tight  py-5 "
                >
                  Бидний тухай
                </p>
                <p className="mt-2 text-xl font-light">
                  Манай компани нь 2009 онд байгуулагдсан бөгөөд, банк санхүүгийн программ хангамж, түүний шийдэл, мэдээллийн сангийн зохион байгуулах, төлбөр тооцооны шийдэл боловсруулах чиглэлээр үйл ажиллагаа явуулдаг. Мөн банк санхүүгийн мэдээллийн систем, программ хангамж, мэдээллийн сан болон түүний нууцлал аюулгүй байдлыг хариуцан ажиллаж байсан тухайн салбартаа олон жилийн мэдлэг туршлага хуримтлуулсан чадварлаг, бүтээлч хамт олноос бүрдэж байна.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
