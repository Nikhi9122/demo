import React, { useEffect } from 'react'
import axios from 'axios';
    function Products() {
        const [products,setProducts]=React.useState([])
        useEffect(()=>{
         axios.get("https://fakestoreapi.com/products")
         .then((res)=>{
            setProducts([...res.data])
            
         })

        },[])
        console.log(products)
         return (
    <div>
            <h1>PRODUCTS</h1>
        
            {
                    products.map((product)=>{
                
                        return(<li  key={product.title}>
                            {product.title}
                            <div>
                                {product.description}
                            </div>
                            <img src={product.image} width={100}  ></img>
                            </li>)
                        
                    })

            }
    </div>
    )}

export default Products