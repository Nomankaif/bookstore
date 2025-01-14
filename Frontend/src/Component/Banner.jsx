import React from 'react';
import { useState } from 'react';
import banner from "/Banner.png";
import { ChevronLeft, ChevronRight, Book, Star, Mail } from 'lucide-react';
const Banner  = () => {
  
  const testimonials = [
    { id: 1, text: "The best bookstore I've ever visited!", author: "Sarah P." },
    { id: 2, text: "Amazing collection and great prices!", author: "Mike R." },
    { id: 3, text: "Outstanding customer service!", author: "Emma T." }
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  return(
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
            "Explore our bookstore for a wide range of books, from timeless classics to
             modern bestsellers, catering to every reader."
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
       
      </div>
      <div className="bg-pink-50 py-16 mb-14">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Readers Say</h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-center px-8">
                <p className="text-xl italic mb-4">"{testimonials[currentSlide].text}"</p>
                <p className="font-medium">- {testimonials[currentSlide].author}</p>
              </div>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
     
    
      </>
      
   )

 }

 export default Banner