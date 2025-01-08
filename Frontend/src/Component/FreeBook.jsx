import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { useBook } from "../context/BookProvider";
import Slider from "react-slick";
import Cards from "./Card";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { BASE_URL } from "../Config";
export const FreeBook = (props) => {
  const [freeBook, setFreeBook] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const getFreeBook = async() => {
      try {
        const res = await axios.get(`${BASE_URL}/book`);
      
        setFreeBook(res.data.filter((data)=>data.category==="free"));
      } catch (err) {
        console.log(err);
      }
    };
    getFreeBook()
  },[]);


  

  const handleCardClick = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId=user.id


 
    
    try {
      const res = await axios.post(`${BASE_URL}/user/cart/addcart/${id}`,{
        userId: userId,
        quantity:1,
      });
      
      console.log("Response from server:", res.data); // Log the response
    } catch (err) {
      console.log("Error adding to cart:", err); // Log any errors
    }
  };
  
 

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1 className="text-4xl font-semibold text-center">Free Offered Books</h1>
      <div className="ml-8 mr-8">
        <Slider {...settings}>
          {freeBook.map((item) => (
            <Cards item={item} key={item.id} onCardClick={handleCardClick} />
          ))}
        </Slider>
      </div>
    </>
  );
};
