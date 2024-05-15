import { forwardRef } from 'react'
import clsx from 'clsx'

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col mt-0', className)} {...props}>
      {/* <div className="flex justify-between px-4 pt-4 bg-white">
        <UserIcon className="h-6 w-6 flex-none" />
        <MenuIcon className="h-6 w-6 flex-none" />
      </div> */}
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="px-4 text-white bg-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref,
) {
  return (
    <div
      ref={ref}
      className={clsx('flex-auto bg-white', className)}
    >
      {children}
    </div>
  )
})
