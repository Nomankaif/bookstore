import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Sellcard = ({ item }) => {
    const navigate=useNavigate();
    const onCardClick = (id) => {
    navigate(`/payment/${id}`)
  };

  return (
    <div className="flex justify-center items-left ml-4">
      <div className="mt-6 max-w-sm bg-stone-50 rounded-none border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300">
        <figure className="overflow-hidden">
          <img
            src={item.coverImage}
            alt={item.booktitle}
            className="w-[300px] h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
        </figure>
        
        <div className="p-6">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-stone-500">Book Title</span>
            <h2 className="text-lg font-serif mt-1">
              {item.booktitle}
            </h2>
          </div>
          
          <div className="mb-4">
            <span className="text-xs uppercase tracking-wider text-stone-500">Author</span>
            <p className="text-sm font-medium mt-1">
              {item.bookauthor}
            </p>
          </div>
          
          <p className="text-sm text-stone-600 leading-relaxed mb-6">
            {item.description}
          </p>
          
          <div className="flex justify-between items-center pt-4 border-t border-stone-200">
            <span className="text-xl font-serif text-stone-800">
              ${item.price}
            </span>
            <button
              className="bg-stone-800 text-stone-100 px-6 py-2 text-sm uppercase tracking-wider hover:bg-stone-900 transition-colors duration-300"
              onClick={() => onCardClick(item._id)}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellcard;