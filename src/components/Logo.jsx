
import meApp from '@/images/banks/me-app.png'
import Image from "next/image";

export function Logomark() {
  return (
    <Image src={meApp} alt='Me App' width={50} height={50} className='rounded-full'/>
  )
}

export function Logo() {
  return (
      <Logomark width="40" height="40"/>
  )
}
