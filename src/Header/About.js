import React from 'react'

function About() {
  return (
      
      <div className='about-content' >
        <div style={{fontWeight:"bold",letterSpacing:'3px'}}>
          <div className='img-container'>
            <img style={{width:"400px",borderTopLeftRadius:"15px",borderBottomRightRadius:'25px',marginLeft:'122px'}} src='https://www.kingsukhguesthouse.com/assets/out.jpg'></img>
          </div>
       ABOUT US 
       </div>
       <br></br>
       <div className='about-title'>
        <h2>The Best Holidays Start Here!</h2>
        </div><br></br>
        <div className='about-text'><p>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
        
        </p> </div><br></br>
        <div style={{color:"blue"}}>
       <h3>Address:Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156<br></br><br></br>
                Contact us: +91 9007062180</h3>

        </div><br></br><br></br>
        <div className='btn1'>
          <button className='about-item1'>BOOK NOW</button>
        </div>
       
        </div> 

    
  )
}

export default  About;