import React from 'react'
import { ThumbsUp, Home, Users } from 'lucide-react'

export default function Odc3() {
  const stats = [
    {
      icon: ThumbsUp,
      value: '87%',
      label: 'Beoordeelt ons uitstekend',
      color: 'text-purple-600'
    },
    {
      icon: Home,
      value: '10136',
      label: 'Keukenrenovaties uitgevoerd',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      value: '15.500+',
      label: 'Tevreden klanten',
      color: 'text-purple-600'
    }
  ]

  return (
    <div className="bg-white w-full font-inter">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:gap-8 lg:grid lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 text-center"
            >
              <div className="mb-3">
                <stat.icon className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-purple-600 stroke-2" />
              </div>
              
              <div className="mb-2 font-bold text-3xl text-purple-600 sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              
              <div className="text-gray-600 text-sm sm:text-base lg:text-lg">
                {stat.label}
              </div>

              {/* Shadow divider for mobile - hidden on desktop */}
              {index !== stats.length - 1 && (
                <div className="bottom-0 left-0 absolute lg:hidden bg-gradient-to-b from-transparent to-gray-100 w-full h-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}