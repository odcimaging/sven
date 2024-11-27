import React, { useState, useEffect, useCallback } from 'react'
import { Star } from 'lucide-react'

export default function Odc8 () {
  const [activeSlide, setActiveSlide] = useState(0)

  const reviews = [
    {
      name: 'L. Geeraets',
      rating: 5,
      title: 'Attent en zorgvuldig',
      content:
        'Vriendelijke, rustige attente meneer om een dag in huis te hebben. Gaf goed uitleg en heeft de klus naar volle tevredenheid geklaard. Blij met oze "nieuwe" keuken:)'
    },
    {
      name: 'Vinoj Ramdas',
      rating: 5,
      title: 'Zeer snel en netjes alles vernieuwd',
      content:
        'Zeer snel en netjes alles vernieuwd. Alle oude deuren en lades meegenomen. Hele vriendelijke meneer en uiterst professioneel.'
    },
    {
      name: 'Monique van Leeuwen',
      rating: 5,
      title: 'Wij zijn zeer tevreden over het geleverde werk',
      content:
        'Wij zijn zeer tevreden over het geleverde werk, een vakkundige en vriendelijke monteur. Het eindresultaat is boven veerwachting, we zijn er heel blij mee.'
    }
  ]

  const nextSlide = useCallback(() => {
    setActiveSlide(prevSlide => (prevSlide + 1) % reviews.length)
  }, [reviews.length])

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(intervalId)
  }, [nextSlide])

  return (
    <div className='bg-gray-50 w-full font-inter'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl'>
        <h2 className='mb-8 md:mb-12 font-bold text-2xl text-purple-500 sm:text-3xl md:text-4xl'>
          Wat zeggen onze tevreden klanten?
        </h2>

        <div className='flex md:flex-row flex-col md:justify-between md:items-start gap-8 md:gap-16'>
          {/* Trustpilot Rating - Full width on mobile, Left side on desktop */}
          <div className='md:block hidden md:w-1/2'>
            <div className='flex flex-col gap-4'>
              <img
                src='trustpilot-beoordeling.png'
                alt='Trustpilot'
                className='md:mt-12 w-96 h-10'
              />
              
            </div>
          </div>

          {/* Reviews Slider - Full width on mobile, Right side on desktop */}
          <div className='relative md:w-2/3'>
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className='flex-shrink-0 w-full'>
                    <div className='bg-white shadow-sm p-6 rounded-lg'>
                      <div className='flex justify-between items-start mb-4'>
                        <h3 className='font-semibold text-xl'>{review.name}</h3>
                        <div className='flex gap-1'>
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className='w-5 h-5 text-purple-500 fill-purple-500'
                            />
                          ))}
                        </div>
                      </div>
                      <h4 className='mb-2 font-medium text-lg'>
                        {review.title}
                      </h4>
                      <p className='text-gray-600'>{review.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className='flex justify-center gap-2 mt-6'>
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeSlide === index ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
