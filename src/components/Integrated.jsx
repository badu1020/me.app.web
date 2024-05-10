'use client'
import { FadeIn } from './FadeIn'
import { Container } from '@/components/Container'
import Image from 'next/image'

import integ from '@/images/integ.png'

export function Integrated() {
  return (
    <section
      id="integrated"
      aria-label="Features for building a portfolio"
      className="py-10 sm:py-12"
    >
      <Container>
        <p className="text-4xl font-medium tracking-tight text-white py-10 ">Нэгдсэн системүүд</p>
        <div
          className='rounded-3xl bg-gradient-to-br from-[#0E0E0E52] from-10% to-[#494548AF] to-24% border-[solid] border-[0.1rem] border-gray-500'>
          <FadeIn >

            <Image className='p-8' src={integ} alt='Integrated Systems' />

          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
