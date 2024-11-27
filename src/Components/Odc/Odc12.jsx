'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Sun, Users, UserCheck, CheckCircle } from 'lucide-react'

export default function Odc12 () {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  const stats = [
    { icon: Sun, value: 4294, label: 'Uren ervaring' },
    { icon: Users, value: 11, label: 'Teamleden' },
    { icon: UserCheck, value: 73, label: 'Tevreden klanten' },
    { icon: CheckCircle, value: 73, label: 'Afgeronde projecten' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const Counter = ({ value }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const stepTime = duration / steps
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)

      return () => clearInterval(timer)
    }, [value, isVisible])

    return <span className='font-bold text-4xl sm:text-5xl'>{count}</span>
  }

  return (
    <div
      className='relative bg-[#6D28D9] w-full overflow-hidden'
      ref={containerRef}
    >
      {/* Background circles */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='top-1/2 -left-10 absolute bg-purple-500 opacity-20 rounded-full w-40 h-40 transform -translate-y-1/2' />
        <div className='top-0 right-10 absolute bg-purple-500 opacity-10 rounded-full w-60 h-60' />
        <div className='bottom-0 left-1/3 absolute bg-purple-500 opacity-15 rounded-full w-40 h-40' />
      </div>

      <div className='relative mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl'>
        <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center text-white'>
          {stats.map((stat, index) => (
            <div key={index} className='flex flex-col items-center'>
              <stat.icon className='mb-4 w-8 h-8' />
              <Counter value={stat.value} />
              <p className='mt-2 text-sm sm:text-base'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
