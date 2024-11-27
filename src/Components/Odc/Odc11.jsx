import React from 'react'
import {
  Search,
  Laptop,
  Facebook,
  Database,
  ThumbsUp,
  Smartphone,
  ArrowRight
} from 'lucide-react'

export default function Odc11 () {
  const services = [
    {
      icon: Search,
      title: 'Ontwerp',
      description:
        'Altijd een maatwerk ontwerp van hoge kwaliteit, perfect afgestemd op jouw onderneming en doelgroep.'
    },
    {
      icon: Laptop,
      title: 'Persoonlijk contact',
      description:
        'Je kunt altijd contact opnemen voor vragen, zowel technisch als inhoudelijk.'
    },
    {
      icon: Facebook,
      title: 'Branding',
      description:
        'Geen content? Geen probleem! Wij regelen het voor u, met een custom design en content die perfect bij uw bedrijf passen.'
    },
    {
      icon: Database,
      title: 'Lage kosten',
      description:
        'Voor een eenmalig bedrag leveren wij uw website, inclusief hosting voor de eerste drie jaar.'
    },
    {
      icon: ThumbsUp,
      title: 'Online betalingen',
      description:
        'Begin met het versturen van online iDeal betallinks, of laat ons deze integreren in uw webshop!'
    },
    {
      icon: Smartphone,
      title: 'Concept',
      description:
        'U kunt uw wijzigingen en wensen doorgeven, en wij verwerken deze vóór de afgesproken einddatum.'
    }
  ]

  return (
    <div className='bg-white py-12 w-full font-inter'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='mb-12 text-center'>
          <p className='flex justify-center items-center gap-2 mb-2 font-semibold text-orange-500'>
            <span className='bg-orange-500 w-6 h-px'></span>
            SERVICES
            <span className='bg-orange-500 w-6 h-px'></span>
          </p>
          <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl'>
            Oplossingen
          </h2>
        </div>

        <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='relative flex flex-col items-center bg-[#F8F6FF] hover:bg-[#6D28D9] hover:shadow-lg p-8 rounded-lg text-center transform transition-all hover:-translate-y-2 duration-300 cursor-pointer ease-in-out group'
            >
              <div className='group-hover:bg-orange-500 bg-[#6D28D9] mb-4 p-4 rounded-xl transform transition-colors duration-300 rotate-45'>
                <service.icon className='w-6 h-6 text-white -rotate-45' />
              </div>
              <h3 className='group-hover:text-white mb-3 font-semibold text-gray-900 text-xl transition-colors duration-300'>
                {service.title}
              </h3>
              <p className='group-hover:text-white/90 text-gray-600 transition-colors duration-300'>
                {service.description}
              </p>
              <div className='bottom-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <ArrowRight className='w-6 h-6 text-white' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
