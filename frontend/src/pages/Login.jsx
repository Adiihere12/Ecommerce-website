import React, { useState } from 'react'

const Login = () => {

  const [currentstate,setcurrentstate] = useState('Enter your details to join or Sign Up');
  const onSubmithandler = async (Event) =>{
    Event.preventdefault();
  }
  return (

    <form  onSubumit={onSubmithandler}className='flex flex-col items-center w-[35%] sm:max-w-95 m-auto mt-15 gap-4 text-red-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='font-serif text-3xl'>{currentstate}</p>
      </div>

      {currentstate === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-blue-900' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2 border border-blue-900' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-blue-900' placeholder='Password' required/>

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password</p>
        {
          currentstate ==='Login' 
          ? <p onClick={()=>setcurrentstate('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={()=>setcurrentstate('Login')} className='cursor-pointer'>Login here</p>
        }

      </div>
      <button className='bg-red-700 text-white font-bold px-8 py-2 mt-4 hover:rounded-full'>{currentstate === 'Login' ? 'Sign In' : 'Sign Up' }</button>



    </form>
    
  )
}

export default Login
