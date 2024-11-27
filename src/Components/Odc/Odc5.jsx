import React, { useState, useEffect, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'

export default function KitchenShowcase () {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    '/public/as/slide1.png',
    '/public/as/slide2.png',
    '/public/as/slide3.png'
  ]

  const nextSlide = useCallback(() => {
    setActiveSlide(prevSlide => (prevSlide + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000)
    return () => clearInterval(intervalId)
  }, [nextSlide])

  return (
    <div className='bg-white w-full font-inter'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl'>
        <div className='flex md:flex-row flex-col md:items-start md:gap-12'>
          <div className='w-full md:w-1/2'>
            <div className='relative rounded-lg w-full overflow-hidden aspect-[4/3]'>
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Kitchen showcase ${index + 1}`}
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
                    index === activeSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className='flex justify-center gap-2 mt-4 mb-6 md:mb-0'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeSlide === index ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className='flex flex-col justify-between md:pt-20 w-full md:w-1/2'>
            <h2 className='mb-4 font-bold text-2xl text-purple-500 md:text-3xl'>
              Een vernieuwde keuken in 24 uur
            </h2>
            <p className='mb-6 text-gray-600 text-xl'>
              Met een keukenrenovatie van Intereno bespaart u kosten. Niet
              alleen is het voordeliger om uw keuken te laten renoveren in
              plaats van een gehele nieuwe keuken aan te schaffen, ook houden
              wij rekening met uw portemonnee. De kosten zijn uiteindelijk
              uiteraard afhankelijk van uw wensen.
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
