import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
    const {search, setsearch, showsearch, setshowsearch} = useContext(ShopContext);
    const [visible,setvisible] = useState(false)
    const location = useLocation();


    // this useEffect for location on which searchbar only visible.
    useEffect(()=>{
        if(location.pathname.includes('collection')) {
            setvisible(true);
        }
        else {
            setvisible(false);
        }

    },[location])
    
    // if showsearch is true only then we return this div otherwise return null.
    //  e means event 
     
  return showsearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-blue-900 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
        <input value={search} onChange={(e)=>setsearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm'  type='text' placeholder='search' />
        <img className='w-4' src={assets.searchicon}  alt='' />
        </div>
        <img onClick={()=>setshowsearch(false)} className='inline w-4 cursor-pointer' src={assets.cross_icon}  alt=''  />
      
    </div>
  ) : null
}

export default Searchbar
