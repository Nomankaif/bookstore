import React from 'react'
import growth from "../../public/growth.svg"
import chicago from "../../public/chicago.jpg"

export const Contact = (props) => {
  return(
    <div>
    {/* Image Section */}
    <div
  className="w-full h-64 bg-cover bg-center relative flex flex-col items-center justify-center"
  style={{
    backgroundImage: `url(${chicago})`,
    backgroundBlendMode: "overlay",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // white with reduced opacity
  }}
>
  <h1 className="text-4xl text-center text-black font-bold">Get In Touch</h1>
  <p className="text-center text-lg text-black mt-4 font-semibold">
    "Connect with us today to start a meaningful conversation now
    <br />
    "Let's connect! Reach out to us for any inquiries, collaborations, or
    questions. We're here to help. Get in touch today for personalized
    assistance and support."
  </p>
</div>


    {/* Contact Information */}
    <div className="flex flex-col md:flex-row sm:justify-evenly justify-around mt-8 h-[500px] md:h-[100px] ">
      <div className="contact-item text-center   md:mt-2">
        <i className="fa-solid fa-mobile fa-2xl text-pink-600 "></i>
        <div className="font-bold md:mt-2 sm:mt-10">Phone No</div>
        <div className="text-gray-700">+91-6302741807</div>
      </div>
      <div className="contact-item text-center  md:mt-2">
        <i className="fa-solid fa-location-dot fa-2xl text-pink-600"></i>
        <div className="font-bold mt-2">Address</div>
        <div className="text-gray-700">Hyderabad, India</div>
      </div>
      <div className="contact-item text-center  md:mt-2">
        <i className="fa-solid fa-envelope fa-2xl text-pink-600"></i>
        <div className="font-bold mt-2">Email</div>
        <div className="text-gray-700">mdnomankaif55@gmail.com</div>
      </div>
      <div className="contact-item text-center  md:mt-2">
        <i className="fa-solid fa-building fa-2xl text-pink-600"></i>
        <div className="font-bold mt-2">Working hours</div>
        <div className="text-gray-700">9AM to 5PM</div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="flex justify-around mt-12">
      <div className="left-section w-full md:w-1/2 p-6">
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        />
        <div className="flex justify-between gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-1/2 p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-1/2 p-3 mb-4 border border-gray-300 rounded"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full p-3 mb-4 border border-gray-300 rounded"
        ></textarea>
        <button className="w-full p-3 bg-pink-600 text-white rounded hover:bg-pink-700">
          Send
        </button>
      </div>

      <div className="right-section md:block sm:hidden md:w-1/3 p-6">
        <img
          src={growth}
          alt="Growth Image"
          className="max-w-full h-auto mx-auto"
        />
      </div>
    </div>
  </div>
   )

 }