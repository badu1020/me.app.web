import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import apple from '@/images/apple.svg'

export function AppStoreLink({ color = 'black' }) {
  return (
    <Link
      href="https://apps.apple.com/ag/app/me-app-mongolia/id1611989771"
      aria-label="Download on the App Store"
      className={clsx(
        'rounded-lg flex  transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <Image src={apple} alt='App Store' />
    </Link>
  )
}
