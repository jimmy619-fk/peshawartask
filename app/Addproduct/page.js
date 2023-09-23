"use client"
import React, { useState } from 'react'
import { baseURL } from '@/lib/config';


 const  Addproduct = () => {

  const [name ,setName] = useState("");
  const [price ,setPrice] = useState("");
  const [color ,setColor] = useState("");
  const [company ,setCompany] = useState("");
  const [category ,setCategory] = useState("");

// Post api mean Insert Api

  const adproduct = async () => {
    console.log(name, price, company, color, category);
  
    try {
      let result = await fetch(`${baseURL}api/products`, {
        method: "POST",
        body: JSON.stringify({ name, price, color, category, company }),
      });
  
      result = await result.json();
      if (result.success) {
        alert("New Product Added");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding new product");
    }
  };
  

  const clearFields = () => {
    setName("");
    setPrice("");
    setColor("");
    setCompany("");
    setCategory("");
  }

  return (
    <>
  

     
     
      <div className='mx-auto max-w-4xl mt-6'>
      <h1 className="text-2xl font-bold mt-4 ml-3 mb-4"> Add Mobile Entry 🤩 </h1>
        <div className="mb-4 px-5 ">
          <label htmlFor="name"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" placeholder="Mobile name" value={name} onChange={(e)=>setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
          <input type="text" placeholder="Mobile Price" value={price} onChange={(e)=>setPrice(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
          <input type="text" placeholder="Mobile Color" value={color} onChange={(e)=>setColor(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
          <input type="text" placeholder="Mobile Company " value={company} onChange={(e)=>setCompany(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className="mb-4 px-5">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
          <input type="text" placeholder="Category type .. " value={category} onChange={(e)=>setCategory(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        </div>
        <div className='  px-5'>
        <button type="submit" onClick={adproduct} className="text-white px-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
        <button onClick={clearFields} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Clear Fields</button>
        
      </div>

     
      </div>
    </>
  );
}


export default Addproduct