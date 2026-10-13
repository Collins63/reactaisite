import React from 'react'
import { pricing } from '../constants'
import { Button } from './Button'
import { li } from 'framer-motion/client'
import { check } from '../assets'

const PricingList = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap'>
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-neutral-900 border border-gray-800 lg:w-auto even:py-14 odd:py-8 "
        >
          <h4 className="h-2 mb-6 text-white font-bold text-center text-2xl">{item.title}</h4>
          <p className="text-white mt-10  min-h-[4rem] mb-6 text-center">{item.description}</p>
          <ul>
            {item.features.map((feature, index)=>(
              <li className="flex gap-3 mt-5" key={index}>
                <img src={check} alt="Check" width={24} height={24}/>
                <p className='text-gray-300'>{feature}</p>
              </li>
            ))}
          </ul>
          <Button
            className="w-full mb-6 mt-5"
            href={item.price ? "/pricing" : "mailto:collinskurai@gmail.com"}
            white={!!item.price}
          >
           Hire Me
          </Button>
        </div>
      ))}
    </div>
  )
}

export default PricingList