import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products, search, showsearch } = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterproducts, setfilterproducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sorttype, setsorttype] = useState("Newest-first");

  // used spread operator in esle (...prev,)
  const activecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };

  // toogle function for sub category.
  const activesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubcategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    let productscopy = products.slice();  
     if(showsearch && search) {
      productscopy = productscopy.filter(item => item.name.tolowercase().includes(search.tolowercase()))

     }


    if (category.length > 0) {
      productscopy = productscopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subcategory.length > 0) {
      productscopy = productscopy.filter((item) =>
        subcategory.includes(item.subcategory)
      );
    }
    setfilterproducts(productscopy);
  };

  //  used switch case for multiple sorting options.

  const sortproduct = () => {
    let filtercopy = filterproducts.slice();
    switch (sorttype) {
      case 'low-high':
        setfilterproducts(filtercopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setfilterproducts(filtercopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyfilter();
        break;
    }
  };

  useEffect(() => {
    applyfilter();
  }, [category, subcategory, search, showsearch])

  useEffect(() => {
    sortproduct();
  }, [sorttype])

  useEffect(() => {
    setfilterproducts(products);
  }, [])

  // use console.log(category or subcategory) to check array in console window.
  useEffect(() => {
    console.log(subcategory);
  }, [subcategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter */}
      <div className="min-w-40">
        <p
          onClick={() => setshowfilter(!showfilter)}
          className="my-2 text-lg flex items-center cursor-pointer gap-2"
        >
          FILTER
          <img
            className={`h-4 sm:hidden ${showfilter ? "rotate-90" : ""}`}
            src={assets.drop_icon}
            alt=""
          />
        </p>
        {/* filter type category */}
        <div
          className={`border border-red-900 pl-5 py-3 mt-6' ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORES</p>
          <div className="flex flex-col gap-2 text-sm font-semibold text-black">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"men's"}
                onChange={activecategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"women's"}
                onChange={activecategory}
              />
              Women
            </p>
          </div>
        </div>
        {/* filter of subcategory */}
        <div
          className={`border border-red-900 pl-5 py-3 my-5' ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-semibold text-black">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"footwear"}
                onChange={activesubcategory}
              />
              Footwear
            </p>
            {/* <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Sneakers"} onChange={activesubcategory} />
              Sneakers
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Sports"} onChange={activesubcategory} />
              Sports
            </p> */}
          </div>
        </div>
        {/* filter of price */}
        <div
          className={`border border-red-900 pl-5 py-3 my-5' ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">PRICE</p>
          <div className="flex flex-col gap-2 text-sm font-semibold text-black">
            <p className="flex gap-2">
              <label for="price">Rs.1000-10,000</label>
              <br />
              <input type="range" id="price" name="price" list="markers" />

              <datalist id="markers">
                <option value="0"></option>
                <option value="25"></option>
                <option value="50"></option>
                <option value="75"></option>
                <option value="100"></option>
              </datalist>
            </p>
            {/* <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Sneakers"} />
              Sneakers
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Sports"} />
              Sports
            </p> */}
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-center text-lg sm:text-2xl  mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />{" "}
        </div>

        {/* sorting */}
        <div className="flex justify-end text-lg sm:text-2xl  mb-4">
          <select onChange={(e) => setsorttype(e.target.value)} className=" border-2 border-gray-500 text-sm px-2">
            <option value="low-high">
              Sort by: low-high
            </option>
            <option value="high-low">Sort by: high-low</option>
            <option value="Newest-first">Sort by: Newest-first</option>
          </select>
        </div>
        {/* mapping of products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-py-6">
          {filterproducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              id={item._id}
              category={item.category}
              subcategory={item.subcategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
