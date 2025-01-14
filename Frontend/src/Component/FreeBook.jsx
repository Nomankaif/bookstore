import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { useBook } from "../context/BookProvider";
import Slider from "react-slick";
import Cards from "./Card";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { BASE_URL } from "../Config";
import { ChevronLeft, ChevronRight, Book, Star, Mail } from 'lucide-react';

export const FreeBook = (props) => {
  const [freeBook, setFreeBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getFreeBook = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/book`);
        setFreeBook(res.data.filter((data) => data.category === "free"));
      } catch (err) {
        console.log(err);
      }
    };
    getFreeBook();
  }, []);

  const handleCardClick = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;

    try {
      const res = await axios.post(`${BASE_URL}/user/cart/addcart/${id}`, {
        userId: userId,
        quantity: 1,
      });
      console.log("Response from server:", res.data); // Log the response
      navigate("/cart")
    } catch (err) {
      console.log("Error adding to cart:", err); // Log any errors
    }
  };

  var settings = {
    dots: true,
    infinite: true, // Enable infinite loop
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Adjust the speed of autoplay (in milliseconds)
    slidesToShow: 3,
    slidesToScroll: 1, // Scroll one slide at a time for smoother experience
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true, // Ensure autoplay is active for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, // Ensure autoplay is active for the smallest screens
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
       <div className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <Mail className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest book releases, reading recommendations, and exclusive offers.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-4 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 text-white px-8 py-4 rounded-r-lg hover:bg-pink-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
