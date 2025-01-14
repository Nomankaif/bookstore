import React, { useState, useEffect } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import Navbar from "./Navbar";
import { BASE_URL } from "../Config";
import { jsPDF } from "jspdf";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.id;

      try {
        const allItems = await axios.get(
          `${BASE_URL}/user/cartitems/getcart`,
          {
            params: { id: userId },
          }
        );
        setCart(allItems.data);
      } catch (err) {
        console.log("Error fetching cart items:", err);
      }
    };

    getItems();
  }, []);

  const handleDelete = async (bookId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;

    try {
      const response = await axios.delete(
        `${BASE_URL}/user/deleteitems/deletecart?userid=${userId}&bookid=${bookId}`
      );
      if (response.status === 200) {
        console.log("Item deleted successfully:", response.data);
        window.location.reload();
      } else {
        console.error("Error deleting item:", response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.book.price * item.quantity), 0);
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    // Add "Thanks for visiting" message
    doc.setFontSize(40);
    doc.text("Thanks for visiting!", 20, 30);
    doc.text("By MD NOMAN KAIF!", 30, 60);

    

    // Save the PDF
    doc.save("Book.pdf");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-4 sm:py-8 mt-20 px-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">Shopping Cart</h1>
        
        {cart.length > 0 ? (
          <div className="space-y-4 sm:space-y-8">
            <div className="bg-white rounded-lg shadow-sm">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 ${
                    index !== cart.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  {/* Image - Responsive size */}
                  <div className="flex-shrink-0 w-full sm:w-24 h-48 sm:h-24 mb-4 sm:mb-0">
                    <img
                      src={item.book.image}
                      alt={item.book.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="sm:ml-6 flex-grow w-full sm:w-auto">
                    <h3 className="text-lg font-medium">{item.book.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.book.title}</p>
                    <p className="text-sm text-gray-500">Category: {item.book.category}</p>
                    <div className="grid grid-cols-3 sm:hidden mt-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Quantity</p>
                        <p className="font-medium">{item.quantity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="font-medium">${item.book.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total</p>
                        <p className="font-medium">${item.book.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="absolute top-4 right-4 sm:static p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            
            {/* Cart Summary */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <p className="text-lg font-medium">Cart Total</p>
                  <p className="text-sm text-gray-500">
                    {cart.length} {cart.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">${calculateTotal().toFixed(2)}</p>
                </div>
              </div>
              
              <button
                onClick={handleDownload}
                className="w-full mt-4 bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download PDF
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
