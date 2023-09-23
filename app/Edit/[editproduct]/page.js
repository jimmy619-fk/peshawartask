"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { baseURL } from "@/lib/config";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");


  useEffect(() => {
    // By doing this we will get Data Easily
    // console.log(props.params.editproduct)

    getProductDetail();
  }, []);

  // Let fetch Single Record of Data in form
  const getProductDetail = async () => {
    let productId = props.params.editproduct;
    try {
      // let productData = await fetch(
      //   `http://localhost:3000/api/products/${productId}`,
      //   { cache: "no-store" }
      // );
      let productData = await fetch(`${baseURL}api/products/${productId}`, { cache: "no-store" });
      productData = await productData.json();
      if (productData.success) {
        let result = productData.result;
        setName(result.name);
        setPrice(result.price);
        setColor(result.color);
        setCompany(result.company);
        setCategory(result.category);
      }
      console.log(productData);
    } catch (error) {
      console.error(error);
    }
  };
  



  // Put Api when user update their Result
  const updateProduct = async () => {
    try {
      let productId = props.params.editproduct;
      // let data = await fetch("http://localhost:3000/api/products/" + productId, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Cache-Control": "no-cache",
      //     "Pragma": "no-cache",
      //     "Expires": "0",
      //   },

      // Update Put Api
      let data = await fetch(`${baseURL}api/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
          "Expires": "0",
        },
      
        body: JSON.stringify({ name, price, color, company, category }),
      });
      data = await data.json();
      if (data.result) {
        alert("Product has been Updated");
      }
    } catch (error) {
      console.error("An error occurred while updating the product:", error);
    }
  };
  
// Put Api End 



  

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-4xl mt-6">
        <h1 className="text-2xl font-bold mt-4 mb-4">Update Product 😿 </h1>
        <div className="mb-4 px-5 ">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-4 px-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-4 px-5">
          <label
            htmlFor="color"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Color
          </label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-4 px-5">
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-4 px-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[30vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="  px-5">
          <button
            onClick={updateProduct}
            className="text-white px-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   py-2.5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Product
          </button>

          
          <Link href={"/"}>
          <button
            
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Back 
          </button>
          </Link>
        </div>
       
      </div>
      <Footer/>
    </>
  );
}
