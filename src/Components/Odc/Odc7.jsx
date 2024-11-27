import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Odc7 () {
  return (
    <div className='bg-white w-full font-inter'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl'>
        <div className='flex md:flex-row flex-col md:items-center gap-8 md:gap-12'>
          {/* Image Section - Top on mobile, Right on desktop */}
          <div className='md:order-2 w-full md:w-1/2'>
            <div className='relative rounded-lg overflow-hidden aspect-[5/4]'>
              <img
                src='/public/as/image-removebg-preview1.png'
                alt='Woman in kitchen with wooden utensil'
                className='md:pt-4 md:pb-4 w-full h-full'
              />
            </div>
          </div>

          {/* Content Section - Bottom on mobile, Left on desktop */}
          <div className='md:order-1 w-full md:w-1/2'>
            <h2 className='mb-4 font-bold text-2xl text-purple-500 sm:text-3xl md:text-4xl'>
              Komt het financieel even niet uit?
            </h2>

            <p className='mb-6 text-base text-gray-600 sm:text-lg'>
              Wel een keukenrenovatie, maar even niet het geld? Geen probleem!
              Intereno helpt u met de financiering van uw renovatie. Voor
              slechts een klein bedrag per maand kunt u zo toch genieten van een
              vernieuwde keuken.
            </p>

            <button className='inline-flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full w-full md:w-auto font-semibold text-white transition-colors'>
              MEER INFORMATIE
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
