'use client'

import { Container } from '@/components/Container'
import { CirclesBackground } from './CirclesBackground'


export function Policy() {

  return (

    <section
      id="privacy"
      className="relative overflow-show bg-transparent py-5 overflow-hidden"
    >
      <CirclesBackground color="#d62976" className="absolute left-1/2 top-1/2 z-10 mt-44 w-[68.125rem] -translate-x-1/2 -translate-y-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]" />

      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
      </div>
      <Container className="relative font-sans">
        <div className='bg-black'>
          <h1 className="text-4xl font-bold text-white tracking-tight text-white text-center item-center justify-center">
            Privacy Policy
          </h1>
          <hr />
          <div className="mt-6 text-lg text-white px-8 py-6">
            Me app built the [Me app] app as a Free app. This SERVICE is provided by ​Me app at no cost and is intended for use as is. This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at [Me app] unless otherwise defined in this Privacy Policy.
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold'>Information Collection and Use</p> For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to first name, last name, phone number, others. The information that we request will be retained by us and used as described in this privacy policy. The app does use third party services that may collect information used to identify you. Link to privacy policy of third party service providers used by the app            </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold'>Log Data</p> We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
          </div>
          <div className="mt-6 text-lg text-white px-8 py-6">
            <p className='font-bold'>Cookies </p> Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device`s internal memory. This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
          </div>
        </div>
      </Container>
    </section>
  )
}
