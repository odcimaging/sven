import React from 'react'
import { Mail, Search, Laptop } from 'lucide-react'

export default function Odc10 () {
  const services = [
    {
      icon: Mail,
      title: 'Marketing',
      description: 'Vanaf €495,- een pakket om uw online bereik te vergroten.'
    },
    {
      icon: Search,
      title: 'SEO & Backlinks',
      description:
        'Bekijk de marketingpakketten voor meer informatie en de beschikbare mogelijkheden.'
    },
    {
      icon: Laptop,
      title: 'Design & Development',
      description:
        'Alle websites worden op maat gemaakt, zodat u volledig tevreden bent.'
    }
  ]

  return (
    <div className='bg-white py-12 w-full font-inter'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='flex flex-col items-center bg-purple-50 hover:shadow-lg p-8 rounded-lg text-center transform transition hover:-translate-y-2 duration-300 ease-in-out hover:scale-105'
            >
              <div className='mb-4'>
                <service.icon className='w-12 h-12 text-purple-600' />
              </div>
              <h3 className='mb-3 font-semibold text-xl'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
