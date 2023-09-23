"use client"
import { baseURL } from "@/lib/config";
export default function DeleteProduct(props) {

  // Delete api or eska eska button hum ne product list ma call ke hain
  const deleteRecord = async () => {
    try {
      const timestamp = new Date().getTime();
      let response = await fetch(
        `${baseURL}api/products/${props.id}?timestamp=${timestamp}`,
        {
          method: "DELETE",
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      );
      response = await response.json();
      if (response.success) {
        alert("Product Deleted Successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={deleteRecord}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 4a1 1 0 011-1h8a1 1 0 011 1v1h1a1 1 0 110 2H4a1 1 0 110-2h1V4zm4 8a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
