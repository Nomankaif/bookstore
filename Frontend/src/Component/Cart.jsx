import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Cart = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.id;
      console.log(userId)

      try {
        const allItems = await axios.get(
          `https://bookstore-1-khy1.onrender.com/user/cartitems/getcart`,
          {
            params: { id: userId }, // Pass userId as a query parameter
          }
        );
        setCart(allItems.data); // Set state with the fetched data
      } catch (err) {
        console.log("Error fetching cart items:", err);
      }
    };

    getItems(); // Call the function inside useEffect to avoid infinite loop
  }, []); // Empty dependency array to run only once on mount

  

    const handleDelete =async(bookId)=>{
      const user=JSON.parse(localStorage.getItem("user"));
      const userId=user.id;
      console.log(bookId)
      console.log(userId)
      try{
        const response=await axios.delete(`https://bookstore-1-khy1.onrender.com/user/deleteitems/deletecart?userid=${userId}&bookid=${bookId}`)
        if (response.status === 200) {
          console.log("Item deleted successfully:", response.data);
          window.location.reload()
          
          // Optionally, update your UI (e.g., remove the item from the list)
        } else {
          console.error("Error deleting item:", response.data.message);
        }
        
      }catch(err){
        console.log(err)
      }
    }
  
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto py-8 mt-12">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((data, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
              >
                <img
                  src={data.book.image}
                  alt={data.book.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">{data.book.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {data.book.title}
                  
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-lg font-medium text-green-600 dark:text-green-400">
                    ${data.book.price}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Quantity: {data.quantity}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Category: {data.book.category}
                </p>
                <div>
                  <button className="ml-56 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
                  onClick={()=>handleDelete(data._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
