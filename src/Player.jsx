import React, { useState } from 'react'

function Player(props) {
    let [q,setQ]=useState(0)
    function dec(){
        setQ(q--)
        
    }
    function inc(){
        setQ(q++);
    }
    
  return (
    
    <div  className='rs'>
       <u><center><h1>{props.name}</h1></center></u> <br />
       <center><h3>{props.senname}</h3></center><br />
       <center><h4>{props.senprice}</h4></center>
      <center><h2>Quantity:</h2></center><center className='center'> <button onMouseEnter={dec} className='buttonkey1'>-</button>{q}
        <button onMouseEnter={inc} className='buttonkey2'>+</button></center><br />
       <center > <button className='add' >Add to Cart</button></center>
       <ion-icon name="bag"></ion-icon>
  </div>
  
  );
}

export default Player