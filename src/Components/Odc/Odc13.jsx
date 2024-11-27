import React from 'react'
import { Check, X } from 'lucide-react'

const CustomIcon = ({ path, className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d={path} />
  </svg>
)

export default function Odc13() {
  const plans = [
    {
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z",
      name: 'Basis',
      price: '€ 995,-',
      description: 'Een eenvoudige website met veel extra, zoals WhatsAppintegratie.',
      features: [
        { name: 'Custom design', included: true },
        { name: 'Hosting & domein', included: true },
        { name: 'Beveiliging', included: true },
        { name: 'Zakelijke email', included: true },
        { name: 'Whatsapp integratie', included: true },
        { name: 'Levertijd 7 dagen', included: true },
        { name: 'Contactformulier', included: false },
        { name: 'Payment gateway', included: false },
      ],
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
      cardColor: 'bg-white'
    },
    {
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
      name: 'Pro',
      price: '€ 1795,-',
      description: 'Met zakelijke betaalverzoeken en een contactformulier.',
      badge: 'Beste Deal',
      features: [
        { name: 'Custom design', included: true },
        { name: 'Hosting & domein', included: true },
        { name: 'Beveiliging', included: true },
        { name: 'Zakelijke email', included: true },
        { name: 'Whatsapp integratie', included: true },
        { name: 'Contactformulier', included: true },
        { name: 'Payment gateway', included: true },
        { name: 'Levertijd 14 dagen', included: true },
      ],
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
      cardColor: 'bg-white'
    },
    {
      icon: "M17 15l1.55 1.55c-.96 1.69-3.33 3.04-5.55 3.37V11h3V9h-3V7.82C14.16 7.4 15 6.3 15 5c0-1.65-1.35-3-3-3S9 3.35 9 5c0 1.3.84 2.4 2 2.82V9H8v2h3v8.92c-2.22-.33-4.59-1.68-5.55-3.37L7 15l-4-3v3c0 3.88 4.92 7 9 7s9-3.12 9-7v-3l-4 3zM12 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",
      name: 'Webshop',
      price: 'Prijs in overleg',
      description: 'Een complete webshop, inclusief een handleiding voor het uploaden van producten en het ontvangen van betalingen.',
      features: [
        { name: 'Custom design', included: true },
        { name: 'Hosting & domein', included: true },
        { name: 'Beveiliging', included: true },
        { name: 'Zakelijke email', included: true },
        { name: 'Contactformulier', included: true },
        { name: 'Whatsapp integratie', included: true },
        { name: 'Payment gateway + integratie', included: true },
        { name: 'Levetijd 21 dagen', included: true },
      ],
      buttonColor: 'bg-pink-500 hover:bg-pink-600',
      cardColor: 'bg-[#6D28D9]'
    }
  ]

  return (
    <div className="bg-white py-12 w-full font-inter">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-2xl sm:text-3xl">
            Voordelig & transparant
          </h2>
          <p className="text-gray-600">
            Neem nu contact op!
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 ${plan.cardColor} ${
                plan.cardColor === 'bg-white' ? 'border border-gray-200' : 'text-white'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <CustomIcon 
                    path={plan.icon} 
                    className={plan.cardColor === 'bg-white' ? 'text-gray-900' : 'text-white'}
                  />
                  <h3 className={`text-xl font-bold ${
                    plan.cardColor === 'bg-white' ? 'text-gray-900' : 'text-white'
                  }`}>
                    {plan.name}
                  </h3>
                </div>
                {plan.badge && (
                  <span className="bg-orange-500 px-2 py-1 rounded-full text-white text-xs">
                    {plan.badge}
                  </span>
                )}
              </div>

              <p className={`text-sm mb-6 ${
                plan.cardColor === 'bg-white' ? 'text-gray-600' : 'text-white/90'
              }`}>
                {plan.description}
              </p>

              <div className="mb-6 font-bold text-2xl">
                {plan.price}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className={`w-5 h-5 ${
                        plan.cardColor === 'bg-white' ? 'text-green-500' : 'text-white'
                      }`} />
                    ) : (
                      <X className="w-5 h-5 text-gray-400" />
                    )}
                    <span className={`text-sm ${
                      feature.included 
                        ? plan.cardColor === 'bg-white' ? 'text-gray-900' : 'text-white'
                        : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full ${plan.buttonColor} text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200`}
              >
                Begin nu
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}