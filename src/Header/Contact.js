import React from 'react'

function Contact() {
  return (
    <div>
      <div className='container'>
        <div className='items'>
          <div className='contact'>
            <div className='first-text'>Contact Info
            <div className='first-text1'><br></br>
              <i class="fa-sharp fa-solid fa-location-dot"></i>&nbsp;&nbsp;Beside Barshal Water Tank,<br></br>
                    Manpur, Barhanti,
                    West Bengal 723156

                    <div><br></br><i class="fa-solid fa-envelope-open"></i>&nbsp;&nbsp;kkghosh0099@gmail.com</div><br></br>
                    <div><i class="fa-solid fa-phone-volume"></i>&nbsp;&nbsp;+91 9007062180</div>
                    </div><br></br><br></br><br></br><br></br><br></br>
                    <div className='logos'>
                    <i class="fa-brands fa-facebook-f" ></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
            </div>
          </div>
          <div className='submit-form'>
            <h4 className='third-text'>Send a Message</h4>
            <form action=''>
              <div className='input-box'>
                <input type='text' className='input' placeholder='First Name'></input>
                <label for=""> </label>
              </div>
              <div className='input-box'>
                <input type='text' className='input' placeholder='Last Name'></input>
                <label for=""> </label>
              </div>
              <div className='input-box'>
                <input type='email' className='input' placeholder='Email Address'></input>
                <label for=""></label>
              </div>
              <div className='input-box'>
                <input type='number' className='input' placeholder='Mobile Number'></input>
                <label for=""></label>
              </div>
              <div >
               <textarea name='' id='message' cols='30' rows='10' placeholder='Write you message here...' className='input-box'></textarea>
                <label for=""></label>
              </div>
              <button className='send'>Send</button>
            </form>
          </div>
        </div>
      </div>
    <div>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin'
      >
         
      </iframe>
      
    </div>
   <footer className='footer'>
    <div className='container1'>
      <div className='row'>
        <div className='footer-col'>
          <h4><a href='#'>Kingsukh Guest House</a></h4>
          <ul className='ul1'>
            <li>Discover a world of comfort,<br></br> luxury, and adventure as you <br></br>explore our curated selection of<br></br> hotels, making every moment of <br></br>your getaway truly extraordinary.
            </li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4 >QUICK LINKS</h4>
          <ul  className='ul1'>
            <li><a href='#'>Browse Destinations</a></li>
            <li><a href='#'>Special Offers & Packages</a></li>
            <li><a href='#'>Room Types & Amenities</a></li>
            <li><a href='#'>Customer Reviews & Ratings</a></li>
            <li><a href='#'>Travel Tips & Guides</a></li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4 >OUR SERVICES</h4>
          <ul  className='ul1'>
            <li><a href='#'>Concierge Assistance</a></li>
            <li><a href='#'>Flexible Booking Options</a></li>
            <li><a href='#'>Airport Transfers</a></li>
            <li><a href='#'>Wellness & Recreation</a></li>
          </ul>
        </div>

        <div className='footer-col'>
          <h4 >CONTACT US</h4>
          <ul  className='ul1'>
            <li><a href='#'>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></li>
            <li><a href='#'>kkghosh0099@gmail.com</a></li>
            <li><a href='#'>+91 9007062180</a></li>
            <div className='social-link'>
              
              <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
              <a href='#'><i class="fa-brands fa-instagram"></i></a>
              <a href='#'><i class="fa-brands fa-youtube"></i></a>
              <a href='#'><i class="fa-brands fa-twitter"></i></a>
              
            </div>
          </ul>
        </div>
        
      </div>

    </div>
    <div className='contact-btn'>
      <button> BOOK NOW</button>
    </div>
   </footer>
    </div>
    
  )
}

export default Contact