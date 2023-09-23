import Link from "next/link";
import Navbar from "@/components/Navbar";
import DeleteProduct from "@/components/DeleteProduct";
import { baseURL } from "@/lib/config";

// Get Api Show all data on Fronted 
const getProducts = async () => {
  try {
    // timestamp query parameter to avoid the cache 
    const timestamp = Date.now();
    const response = await fetch(`${baseURL}api/products?timestamp=${timestamp}`, {
      headers: {
        "Cache-Control": "no-cache"
      }
    });
    const data = await response.json();

    if (data.success) {
      return data.result;
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};


export default async function Page()
{
    const products = await getProducts();
    // console.log(products)
    return(
   
   <>

<Navbar/>
<div className="  overflow-x-auto p-2 ">
      <h1 className="lg:text-2xl sm:text-base md:text-lg font-bold mt-4   mb-4">All Mobile List</h1>
      <table className=" lg:h-[60vh] lg:w-[90vw]  table-auto border-collapse  border border-gray-400">
        <thead className="bg-orange-950 text-white">
          <tr>
           
            <th className="border border-gray-400 px-2 py-2">Name</th>
            <th className="border border-gray-400 px-2 py-2">Price</th>
            <th className="border border-gray-400 px-2 py-2">Color</th>
            <th className="border border-gray-400 px-2 py-2">Company</th>
            <th className="border border-gray-400 px-2 py-2">Category</th>
            <th className="border border-gray-400 px-2 py-2">Update</th>
            <th className="border border-gray-400 px-2 py-2">Delete</th>
           
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              
              <td className="border border-gray-400 px-2 py-2">{product.name}</td>
              <td className="border border-gray-400 px-2 py-2">{product.price}</td>
              <td className="border border-gray-400 px-2 py-2">{product.color}</td>
              <td className="border border-gray-400 px-2 py-2">{product.company}</td>
              <td className="border border-gray-400 px-2 py-2">{product.category}</td>

              
              {/* Edit button Code */}
   <td className="border border-gray-400 px-4 py-2">
    <Link href={"Edit/" + product._id}>       
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3.293 14.707a1 1 0 001.414 0L10 8.414l1.293 1.293a1 1 0 001.414-1.414l-2-2a1 1 0 00-1.414 0L9 6.586 3.293 12.293a1 1 0 000 1.414z" clipRule="evenodd" />
    </svg>
  </button>
  </Link>  
</td>
  {/* End Edit Button Code  */}

  {/* Delete button import here  */}
  <td className="border border-gray-400 px-4 py-2">
  <DeleteProduct id={product._id}/>
 
</td>
{/* End delete button */}
          </tr>
          ))}
        </tbody>
      </table>
      
    </div>
   

   
   </>

    )
}