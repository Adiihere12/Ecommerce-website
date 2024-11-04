import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Relatedproduct from "../Components/Relatedproduct";

const Product = () => {
  const { ProductId } = useParams();
  // console.log(ProductId);  use this for checking productid getting or not on product page.
  const { products, currency, description } = useContext(ShopContext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState("");
  const [size, setsize] = useState("");

  const fetchproductdata = async () => {
    products.map((item) => {
      if (item._id === ProductId) {
        setproductdata(item);
        // use this for checking item details in console window.
        console.log(item);
        // storing image of first product in image state.
        setimage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchproductdata();
  }, [ProductId]);

  return productdata ? (
    // if getting the productdata then return this div.
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*-------------- for display product--------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*------------ product images----------------- */}
        <div className="flex-1 flex flex-col reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[15%] w-full">
            {productdata.image.map((item, index) => (
              <img
                onClick={() => setimage(item)}
                src={item}
                key={index}
                className="w-[25%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-auto h-auto" src={image} alt="" />
          </div>
        </div>
        {/* --------------info of product --------------------*/}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productdata.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-3">(150)</p>
          </div>
          <p className="mt-5 text-3xl font-bold">
            {currency}
            {productdata.price}
          </p>
          {/* <p className='mt-5 text-gray-500 md:w-4/5'>{description}{productdata.description}</p> */}

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productdata.size.map((item, index) => (
                // we used dynamic property for button with back-ticks.
                <button
                  onClick={() => setsize(item)}
                  className={`border py-2 px-4 bg-slate-200 ${
                    item === size ? "border-blue-800" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-800 hover:rounded-full">BUY NOW +</button>
          <div className="text-base font-bold text-black mt-5 flex flex-col gap-1">
            <p>100% AUTHENTIC PRODUCT</p>
            <p>COD AVAILABLE</p>
            <p>NIKE ASSURED</p>

          </div>
        </div>
      </div>
      {/* ----DESCRIPTION--------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">DESCRIPTION</b>
          <b className="border px-5 py-3 text-sm">REVIEWS (150)</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-zinc-700">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quo quia, optio quod facili.
          </p>
          <p>
            addgfhsbcncklscmlsclsclsckslkslslcls
          </p>
        </div>
      </div>

      {/* ---------similar products---------- */}
       <Relatedproduct category={productdata.category} subcategory={productdata.subcategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
  // showing this div when no productdata is found.
};

export default Product;
