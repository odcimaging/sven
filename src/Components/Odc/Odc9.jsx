import React from 'react'
import { ChevronUp } from 'lucide-react'

export default function Odc9 () {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='bg-white w-full font-inter'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl'>
        <div className='border-gray-200 border-t' />

        <div className='flex flex-col items-center mt-8'>
          <button
            onClick={scrollToTop}
            className='bg-purple-500 hover:bg-purple-600 p-3 rounded-full focus:ring-offset-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
            aria-label='Scroll back to top'
          >
            <ChevronUp className='w-6 h-6' />
          </button>

          <p className='mt-2 mb-4 text-gray-600'>Terug naar boven</p>

          <div className='text-sm'>
            <a href='/privacy' className='text-blue-600 hover:underline'>
              privacyverklaring
            </a>
            <span className='mx-1 text-gray-400'>|</span>
            <a href='/cookies' className='text-blue-600 hover:underline'>
              Cookie-settings
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
