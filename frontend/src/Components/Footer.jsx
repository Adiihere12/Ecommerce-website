import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.Logo_icon} className='mb-5 w-30'  alt=''   />
                <p className='w-full md:w-2/4 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur harum quam iusto ad et!</p>
            </div>
            <div>
                <p className='text-x1 font-medium mb-3'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-x1 font-medium mb-3'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li>+91-222-333-000</li>
                    <li>NikeOffical@gmail.com</li>
                </ul>
            </div>

        </div>
        <div>
            {/* <hr  /> */}
            <p className='py-5 text-center text-pretty'>CopyRight 2024@ Nike,Inc . All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
