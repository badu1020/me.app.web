"use client"
import { UserCount } from '@/components/UserCount'
import Card from '@/components/Card'
import { Hero } from '@/components/Hero'
import { AboutUs } from '@/components/AboutUs'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Integrated } from '@/components/Integrated'

export default function Home() {
  return (
    <>
      <div
        // className='bg-gradient-to-b from-[#a265a8] via-[#5B49A5] to-[#000000]'
        className='bg-black w-full '
      >
        <Hero />
        <UserCount />
        <PrimaryFeatures />
        <AboutUs />
        <Card />
        <Integrated />
      </div>
    </>
  )
}
