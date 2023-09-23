"use client"
import { baseURL } from '@/lib/config';
import React, { useState, useEffect } from 'react';


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  // Get Api For Search
  const getProducts = async () => {
    try {
      // timestamp query parameter to avoid the cache
      const timestamp = Date.now();
      const response = await fetch(`${baseURL}api/products?timestamp=${timestamp}`, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
      const data = await response.json();

      if (data.success) {
        return data.result;
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
    <div className="max-w-4xl mx-auto mt-10">
        <form onSubmit={handleSearch}>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search a Mobile by name"
              className="w-full border border-gray-400 mr-2 px-3 py-2 rounded-lg"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Search
            </button>
          </div>
        </form>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead className='bg-orange-950 text-white'>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Price</th>
                <th className="border border-gray-400 px-4 py-2">Color</th>
                <th className="border border-gray-400 px-4 py-2">Company</th>
                <th className="border border-gray-400 px-4 py-2">Category</th>
              </tr>
            </thead>
            <tbody>
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <tr key={product.id}>
                    <td className="border border-gray-400 px-4 py-2">{product.name}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.price}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.color}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.company}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.category}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="border border-gray-400 px-4 py-2 text-center">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Search;
