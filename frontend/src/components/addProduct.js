import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const addProduct = () => {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  
   const navigate = useNavigate();

  
  const saveProduct = async (e) => {
    e.preventDefault();
    
    // history.push("/");
    await axios.post('http://localhost:5000/product', {
      title: title,
      price: price
    });
    navigate('/');
    
    }
  
  return (
    <div className='mt-5' >
      <form onSubmit={ saveProduct }>
         <div  className='field'>
         <label className='label'>Title</label>
         <input
          className="title"
           type="text" 
           placeholder="Title"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           />
         </div>

         <div  className='field'>
         <label className='label'>Price</label>
         <input 
         className="price"
          type="text" 
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          />
         </div>

         <div div className='field'>
         <button className="button is-primary">Save</button>
         </div>

      </form>

      {title} - {price}
    </div>
  )
}

export default addProduct
