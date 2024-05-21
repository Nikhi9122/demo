import React from 'react'

function Rooms() {
  return (
    <div className='living-room'>
      <div className='room-header'><br></br>
        <h4>OUR LIVING ROOM</h4><br></br>
        <span className='room-title'>The Most Memorable Rest <br></br>Time Starts Here.</span>
      </div><br></br>
      <div className='room'>
        <div className='room-img'>
        <div className='room-symbols'>
        <i class="fa-light fa-heart"></i>
          <i class="ri-paint-fill"></i>
          </div>
          <div>
        <img src='https://www.kingsukhguesthouse.com/assets/small.jpg' style={{ width: '300px',height:'250px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}></img>
        
       

        </div>

        <div style={{padding:'10px'}}>
          <h3>Cozy Haven Room</h3><br></br>
        
          <span className='room-details'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.<br></br>
          Starting from <b>Rs. 1000/night</b>
          <div className='btn2'>
            
           <button className='home-item'>BOOK NOW</button>
           </div>
        


          </span>
          </div>
        </div>
        <div className='room-img'>
          <img src='https://www.kingsukhguesthouse.com/assets/large.jpg'  style={{ width: '300px',height:'250px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}></img>
          <div  style={{padding:'10px'}}>
            <h3>
            Spacious Serenity Suite
            </h3><br></br>
            <span className='room-details'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.<br></br>

              Starting from <b>Rs. 1500/night</b>

              <div className='btn2'>
            
           <button className='home-item'>BOOK NOW</button>
           </div>
          
              </span>
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Rooms