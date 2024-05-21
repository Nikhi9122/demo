import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Home from './Header/Home'
import About from './Header/About'

function App() {
  
  return (
    <div className='body'> 
      <div className='Header'>

        <div className='title'>
      <h3>Kingsukh Guest House
        
      </h3>
        </div>

        {/* <div>
          <h1><center>Make Yourself At Home
In Our Guest House.</center></h1>
        </div> */}
      
      <button className='btn' onClick={()=>{console.log("hi")}}>BOOK NOW</button>
       
      <div className='nav'>
      <div className='nav-items'>

      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li> <Link to='/about'>About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/gallary">Gallary</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
      </div>
      <div className='home'> 
        <h1>Make Yourself At Home <br />  
            In Our<span style={{color:"#e82574"}}> Guest House.</span></h1>
I        </div>
      
      </div>
            <Outlet/>
    </div>
    
  )
}

export default App