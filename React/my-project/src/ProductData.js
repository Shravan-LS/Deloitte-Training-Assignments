import axios from 'axios'
import { useState } from 'react'
import './product.css'



function Product() {
  
    const[prodArray, setProdArray] = useState([]);

    function getData_click(){
        let url = "https://fakestoreapi.com/products";
        axios.get(url).then(resData => {
            console.log(resData.data);
            setProdArray(resData.data);
            console.log(prodArray);
        }) 
    }


    let result = prodArray.map(item => 
        
            <div className="container">    
                <h4>ID: {item.id}</h4>
                <h4>Title: {item.title}</h4>
                <h4>Price: {item.price}</h4>
                <p>{item.description}</p>
                <h5>Category: {item.category}</h5>
                <img src={item.image}></img>
                <p>Rating: {item.rating.rate}</p>
                <p>Count: {item.rating.count}</p>
            </div>

        )

    return(
    <>
        <input type="button" value="Get Product Info" onClick={getData_click}></input>

        <div className="total">
            {result}
        </div>
    </>
  
  )}
  
  export default Product;
  