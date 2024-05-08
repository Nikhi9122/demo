import React from 'react'
import ReactDOM from "react-dom"


/**
 * Header 
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 * -RestaurantCard
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */


const Header = () =>{
  return (
  <div className='header'>
    <div className='lodo-container'>
 <img  className="logo" src='https://www.pngitem.com/pimgs/m/533-5336335_lunchbox-best-food-ordering-system-food-delivery-hd.png'></img>
  </div>
<div className='nav-items'>
<ul>
  <li>Home</li>
  <li>About us</li>
  <li>Contact Us</li>
  <li>Cart</li>
</ul>
</div>
  </div>

  )
}
const RestaurantCard=()=>{
  return(
    <div className='res-card'>
    <img style={{width:"142px" ,padding:'3px'}}  src='https://www.paradisefoodcourt.in/images/gallery/food-images/thumb/im1.jpg'></img>
      <h3>Paradise Biryani</h3>
      <h4>3.8 starts</h4>
      <h4>40-45mins</h4>
    </div>
  )
}
const Body =()=>{
  return (
    <div className=' body'>
      <div className='Search'>Search</div>
      <div className='res-container'>
        //RestaurantContainer
      </div>
      <RestaurantCard  >

      </RestaurantCard>
    </div>
  )
}

const App=()=> {
  return (
    <div className="app">

<Header></Header>
<Body></Body>
    </div>
  )
}

export default App