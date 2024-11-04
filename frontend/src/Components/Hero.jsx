import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-500'>

        {/*  left side */}
        <div className='w-full sm:1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-gray-700'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[gray]'></p>
                <p className='font-serif text-sm md:text-base'>MOST DEMANDING</p>
            </div>
            <h1 className='text-2xl sm:py-3 lg:text-5xl leading-relaxed'>See What's New</h1>
            <div className='flex items-center gap-2'>
                <p className='font-serif text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[2px] bg-[gray]'></p>
            </div>
        </div>
        </div>

        {/* right side */}

        <img className='w-full sm:w-2/4' src={assets.nike}  alt=''  />  
      
    </div>
  )
}

export default Hero
