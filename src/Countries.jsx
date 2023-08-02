import React, { useEffect } from 'react'
import axios from 'axios'
function Countries() {
const [countries,setCountries]=React.useState([])
     useEffect(()=>{
        axios.get(' https://restcountries.com/v3/all')
        .then((rest)=>{
            setCountries([...rest.data])
        })
     },[])
     console.log(countries)
  return (
    <div>
        <h1 className='box'>COUNTRIES</h1>
          {
            countries.map((countrie)=>{
                    return(
                                                
                            <li>
                                {countrie.name.common}
                                <img src={countrie.flags[1]} width={50}/>
                                
                            </li>
                           
                        
                    )
            })
          }
    
    
    </div>
    
  )
}

export default Countries