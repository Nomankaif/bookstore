
import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from "react";

export const BookContext = createContext();
export const BookProvider = ({children}) => {
    const[books,setBooks]=useState(null);
    const fetchBookById=async(id)=>{
        try{
            const res=await axios.get(`http://localhost:4001/book/get/${id}`);
            setBooks(res.data)
            const storeData=JSON.stringify(res.data)
            localStorage.setItem("cart",storeData)
            return res.data
        }catch(err){

            console.log(err)
        }
    }

    
  return(
    <BookContext.Provider value={{ books, fetchBookById }}>
    {children}
  </BookContext.Provider>
   )

 }
 export const useBook = () => useContext(BookContext);