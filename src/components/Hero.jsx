"use client";
import { useId } from 'react'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { FadeIn } from './FadeIn'
import { PlayStoreLink } from '@/components/PlayStoreLink'
import Image from 'next/image';
import homepage from '@/images/Dashboard.svg'
import Three from './Balls';
// import video from '@/video/meapp.mp4'


function BackgroundIllustration(props) {
  let id = useId()



  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d62976" />
            <stop offset="1" stopColor="#d62976" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#2B2B2B"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d62976" />
            <stop offset="1" stopColor="#d62976" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}



export function Hero() {
  return (
    <div className="overflow-hidden py-12">
      <Container>
        <div className="lg:grid lg:grid-rows-2 lg:grid-cols-12 lg:gap-x-2 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 ">
            <FadeIn>
              <h1 className="text-7xl font-medium tracking-tight text-white">
                ME APP
              </h1>
              <p className="mt-6 text-lg font-light text-white">
                Me app нь танд ББСБ, ХЗХ -нуудад  бүртгэлтэй дансаа нэг дороос удирдах үйлчилгээ авах боломжыг олгоно.
              </p>
              <div className="mt-8 gap-x-6 gap-y-4 flex sm:content-left sm:justify-left xm:justify-center xm:contect-center">
                <AppStoreLink />
                <PlayStoreLink />
              </div>
            </FadeIn>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9  sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32 z-3">
              {/* <Three/> */}
              <PhoneFrame className="mx-auto max-w-[266px]" priority>
                <Image src={homepage} alt='Me App' />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
