import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Odc2 () {
  return (
    <div className='relative mx-auto px-2 sm:p-0 font-inter overflow-hidden'>
      {/* Video Section - Separate block on mobile */}
      <div className='sm:hidden mb-4 rounded-lg w-full overflow-hidden'>
        <video controls className='w-full aspect-video'>
          <source src='/public/as/background.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background Video - Only visible on desktop */}
      <div className='sm:block hidden'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='left-0 absolute mt-20 w-full h-[60vh] object-cover'
        >
          <source src='/public/as/background.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Container */}
      <div className='relative flex items-center mx-auto max-w-7xl'>
        <div className='mx-auto w-full max-w-7xl'>
          {/* cyan Circle Badge - Hidden on mobile */}
          <div className='top-8 right-28 absolute sm:flex flex-col justify-center items-center hidden bg-cyan-500 shadow-lg rounded-full w-40 h-40 text-center text-white transform rotate-12'>
            <p className='px-4 font-bold text-sm leading-tight'>
              EEN VERNIEUWDE KEUKEN IN 24 UUR
            </p>
            <div className='absolute bg-cyan-500 opacity-75 rounded-full w-full h-full animate-ping-slow'></div>
            <div className='absolute bg-cyan-500 opacity-50 rounded-full w-full h-full animate-ping-slower'></div>
          </div>

          {/* cyan Banner - Mobile Only */}
          <div className='sm:hidden bg-cyan-500 mb-4 px-4 py-3 rounded-lg w-full font-bold text-center text-white'>
            EEN VERNIEUWDE KEUKEN IN 24 UUR
          </div>

          {/* Purple Content Box */}
          <div className='relative bg-purple-600/80 shadow-xl md:ml-8 rounded-lg w-full sm:max-w-xl text-white'>
            <div className='p-6 sm:p-8 md:p-12'>
              <h1 className='mb-6 font-bold text-2xl sm:text-3xl md:text-4xl leading-tight'>
                WAT KOST EEN KEUKENRENOVATIE BINNEN 1 DAG?
              </h1>

              <p className='mb-6 text-base sm:text-lg'>
                Een keuken renoveren in één dag? Dat kan bij Intereno. Laat u
                verrassen door het uitgebreide keukenrenovatie programma van
                Intereno, dé landelijke specialist in keukenrenovatie. Onze
                vakkundige monteurs veranderen uw huidige keuken in een keuken
                van deze tijd.
              </p>

              <p className='mb-8 text-base sm:text-lg'>
                Wil u weten wat een keukenrenovatie van uw keuken gaat kosten?
              </p>

              {/* CTA Button */}
              <button className='flex justify-center sm:justify-start items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full w-full sm:w-auto font-semibold text-base text-white sm:text-lg transition-colors duration-300'>
                GRATIS PRIJSINDICATIE
                <ArrowRight className='w-5 sm:w-6 h-5 sm:h-6' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation classes */}
      <style jsx>{`
        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes ping-slower {
          75%,
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-ping-slower {
          animation: ping-slower 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  )
}
