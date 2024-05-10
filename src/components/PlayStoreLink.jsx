import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import playstore from '@/images/play.svg'

export function PlayStoreLink({ color = 'black' }) {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=mn.fiba.meappmongolia"
      aria-label="Get it on PlayStore"
      className={clsx(
        'rounded-lg flex justify-center contect-center transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <Image src={playstore} alt='Play Store' />
    </Link>
  )
}