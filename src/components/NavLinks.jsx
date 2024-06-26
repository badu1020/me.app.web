'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  let timeoutRef = useRef(null)

  return [
    ['Онцлог шинжүүд ', '/#features'],
    ['Бидний тухай', '/#aboutus'],
    ['Нэгдсэн системүүд', '/#integrated']
  ].map(([label, href], index) => (
    <Link
      key={label}
      target='{main}'
      href={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-white transition-colors delay-150 hover:text-gray-900 hover:delay-0"
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
