import React from 'react'
import { Check } from 'lucide-react'

export default function Odc6 () {
  const features = [
    {
      title: 'CBW Erkend',
      description: 'Wij zijn CBW erkend met productgarantie'
    },
    {
      title: 'Eigen fabriek in Nederland',
      description:
        'Intereno produceert en fabriceert keukenonderdelen in een eigen fabriek in Nederland.'
    },
    {
      title: '5 jaar garantie',
      description:
        'Wij bieden standaard 5 jaar garantie op productie- en fabricagefouten'
    }
  ]

  return (
    <div className='bg-white w-full font-inter'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl'>
        <div className='relative'>
          <div className='flex flex-row justify-between sm:items-start gap-4 mb-4'>
            <h2 className='w-1/2 font-bold text-purple-500 text-xl sm:text-3xl md:text-4xl'>
              Dé specialist in keukenrenovatie
            </h2>
            <div>
              <img
                src='/public/as/cbw.png'
                alt='CBW Certification'
                className='w-32 sm:w-1/2 self-end sm:self-start'
              />
            </div>
          </div>

          <div className='max-w-3xl'>
            <p className='mb-6 text-gray-600 text-sm sm:text-base'>
              Onze vakkundige monteurs veranderen uw huidige keuken in een
              keuken van deze tijd. Waar u weer vele jaren plezier van heeft.
              Via Intereno krijgt u in één dag letterlijk een nieuwe kijk op uw
              oude keuken.
            </p>

            <div className='space-y-4'>
              {features.map((feature, index) => (
                <div key={index} className='flex items-start gap-2'>
                  <div className='flex-shrink-0 mt-0.5 w-5 h-5'>
                    <Check className='w-5 h-5 text-purple-500' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-base text-purple-500 sm:text-lg'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-600 text-sm sm:text-base'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
