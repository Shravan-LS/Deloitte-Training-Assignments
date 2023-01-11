import {useState}  from 'react';
import './ProductDetails.css';


function Prod() { 

  const[pname, setPName]  = useState("");
  const[price, setPrice]  = useState("");
  const [quantity,  setQuantity] =  useState("");
  const [result,  setResult] =  useState(0);


  function  pnameChange(event)
  {
      setPName(event.target.value);
  }


  
  function  quantityChange(event)
  {
      setQuantity(event.target.value);
  }
 

  function  totalClick()
  { 

        setResult(price*quantity);
    
  }
   
 
  return (
    <div className="body">
      <h3>Product Details</h3>
 
      Product Name : <input type="text"  onChange={pnameChange}   />
      <br/><br/>

      Price : <input type="number"  onChange={(event) => setPrice(event.target.value)}   /> 
      <br/><br/>

      Quantity : <input type="number"  onChange={quantityChange}   />
      <br/><br/>
 
      <input type="button"  value="Submit"  onClick={totalClick}  />

      <h1>The total Amount for the product <span className='item'>{pname}</span> is: <span className='total'>{result}</span></h1> 
    
    </div>
  );
}

export default Prod;