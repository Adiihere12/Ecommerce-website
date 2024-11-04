import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Order from './pages/Order'
import Product from './pages/Product'
import About from './pages/About'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Searchbar from './Components/searchbar'

const App = () => {
  return (
    <div className='px-2 sm:px[5vw] md:px[6vw] lg:px[9vw]'>

      <Navbar />
      <Searchbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Collection' element={<Collection/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Product/:ProductId' element={<Product/>}/>  
        <Route path='/About' element={<About/>}/>





      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
