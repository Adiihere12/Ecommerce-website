import React from 'react'
import { assets } from '../assets/assets'

const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-10 sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-gray-900'>
        <div>
            <img  src={assets.exchange_icon} className='w-6 m-auto mb-5' />
            <p className='font-extrabold'>EXCHANGE POLICY</p>
            <p className='text-gray-700'>7 days exchange</p>
        </div>
        <div>
            <img  src={assets.support_icon} className='w-12 m-auto mb-5' />
            <p className='font-extrabold'>CUSTOMER SUPPORT</p>
            <p className='text-gray-700'>24/7 support available</p>
        </div>

      
    </div>
  )
}

export default Ourpolicy 
