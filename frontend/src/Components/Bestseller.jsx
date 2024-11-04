import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {
    const {products} = useContext(ShopContext);
    const [Bestseller,setBestseller] = useState([]);

    useEffect(()=>{
        const bestproduct = products.filter((item)=>(item.Bestseller));
        setBestseller(bestproduct.slice(0,5))

    },[])


  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-700'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
        </div>

        <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                Bestseller.map((item,index)=>(

                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} category={item.category} subcategory={item.subcategory}/>
                ))
            }

            
        </div> 
    </div>
  )
}

export default Bestseller
