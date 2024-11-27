import React from 'react'

export default function Navbar () {
  return (
    <nav className='bg-white shadow-sm w-full font-inter'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex flex-col'>
            <img
              src='/public/as/logo-intereno.png'
              alt='Intereno Logo'
              className='w-auto h-8 sm:h-8 md:h-10'
            />
            <span className='mt-0.5 text-[8px] text-gray-600 sm:text-[10px] md:text-xs'>
              Een nieuwe kijk op je oude keuken
            </span>
          </div>

          <div className='flex items-center space-x-1 sm:space-x-2'>
            <img
              src='/public/as/trustpilot-beoordeling.png'
              alt='Trustpilot'
              className='w-auto h-4 sm:h-8 md:h-8'
            />
           
          </div>
        </div>
      </div>
    </nav>
  )
}
