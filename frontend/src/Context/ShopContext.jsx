import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 40;
  const [search,setsearch] = useState('');
  // if usestate in showsearch boolean value is true then show search bar otherwise hide when false.
  const [showsearch,setshowsearch] = useState(false);  
  const [cartitem,setcartitem] = useState({});

  const addtocart = async (itemId,size) => {
    letcartdata = clone(cartitem);
    if(cartdata[itemId]) {
      if(cartdata[itemId][size]) {
        cartdata[itemId][size] += 1;
      }
      else {
        cartdata[itemId][size] = 1;

      }
    }
    else {
      cartdata[itemId] = {};
      cartdata[itemId][size] = 1;

    }
    setcartitem(cartdata);

  }

  
  // passing state variables in below value object for further usage in any component.
  const value = {
    products, currency, delivery_fee,
    search,setsearch,showsearch,setshowsearch,
    

  }

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider;
