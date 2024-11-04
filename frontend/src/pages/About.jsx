import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div >

      <div className='text-2xl text-center pt-8  border-t'>
        <Title text1={'ABOUT'} text2={'US'}  />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_icon}  alt='' />
        <div className='flex flex-col justify-normal gap-20 md:w-2/4 text-gray-700'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam corporis enim soluta veritatis illo, beatae, impedit libero atque ullam et, nulla perferendis natus accusamus voluptate! Sequi autem quod hic maxime?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis repellat molestias modi aliquid assumenda rem quas tenetur accusantium. Dolorum ullam sapiente voluptatibus sed similique sint qui iste vitae porro.</p>
        <b className=' text-gray-700'>OUR INITIATIVE</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WY'} text2={'CHOOSE US'}  />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-15 sm:py-20 flex flex-col gap-5'>
          <b>Assured Products</b>
          <p className='text-red-900'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='border px-10 md:px-15 sm:py-20 flex flex-col gap-5'>
          <b> Easy Convenvience</b>
          <p className='text-red-900'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='border px-10 md:px-15 sm:py-20 flex flex-col gap-5'>
          <b>Easy Returns</b>
          <p className='text-red-900'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        

        

        

      </div>
      
    </div>
  )
}

export default About
