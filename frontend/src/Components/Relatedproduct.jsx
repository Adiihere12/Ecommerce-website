import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const Relatedproduct = ({category,subcategory}) => {

    const {products} = useContext(ShopContext);
    const [related,setrelated] = useState([]);

      useEffect(()=>{
        if(products.length > 0) {

            let productscopy = products.slice();
            productscopy = productscopy.filter((item)=> category === item.category);
            productscopy = productscopy.filter((item)=> subcategory === item.subcategory);
            // do console.log below to check that we get another array or not.
            setrelated(productscopy.slice(0,10 ));


        }
      },[products])

  return (
    <div className='my-25'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'SIMILAR'} text2={'PRODUCTS'}  />
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-5'>
            {related.map((item,index) => (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} category={item.category}/>

            ))}

        </div>
      
    </div>
  )
}

export default Relatedproduct
