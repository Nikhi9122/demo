import React, { useEffect } from "react";

function Fruits(){
    let [a,seta]=React.useState(0)
    let[fruit,setfruit]=React.useState(['Banana'])
    let[myfruit,setmyfruit]=React.useState('')
    let myref=React.useRef();

    useEffect(()=>{
        myref.current.focus();
    })

        
    function dec(){
        seta(a-1)
        
    }
    function inc(){
        seta(a+1)
    }

    function add(){
        setfruit([...fruit,myfruit])
    }
    function newadd(e){
        setmyfruit(e.target.value)
    }
  
    return(
        <div className="mybox">
            
          <center>
           
            <input type="search" placeholder="Search for Veg and Fruits"  style={{width:'500px',height:'30px'}} onChange={newadd} ref={myref}/>
             
         
            </center>
           <div style={{border:'2px solid black',width:'200px',height:'250px'}}><br></br>
           <img src="data:image/jpeg;base64,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" style={{width:'80px',height:'80px'}}></img> <br />
            
           {fruit.map((e)=>{
            return <ul>{e}</ul>
           })}<br></br><br></br>
            <button onClick={dec} style={{ backgroundColor:'white',borderRadius:'10px'}}>-</button>
            <b >{a}</b>
            <button onClick={inc} style={{ backgroundColor:'white',borderRadius:'10px'}}>+</button><br /><br />
            <button style={{backgroundColor:'green',width:'180px',color:'white'}} onClick={add} > ADD TO CART</button>
            <br /><br />
            </div>
            

             
         

        </div>
    )
}
export default Fruits;