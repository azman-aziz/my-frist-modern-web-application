import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const editProduct = () => {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  
   const navigate = useNavigate();
   const { id } = useParams();

  
  const editProduct = async (e) => {
    e.preventDefault();
    
    // history.push("/");
    await axios.patch(`http://localhost:5000/product/${id}`, {
      title: title,
      price: price
    });
    navigate('/');
    
    }

    

    const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
    }

    useEffect(() => {
        getProductById();
        }, []);


  return (
    <div className='mt-5' >
      <form onSubmit={ editProduct }>
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
         <button className="button is-primary">Update</button>
         </div>

      </form>

      {title} - {price}
    </div>
  )
}

export default editProduct
