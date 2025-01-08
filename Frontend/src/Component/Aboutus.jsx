import React from 'react'
import Navbar from './Navbar'



export const About = (props) => {
  return(<>
<Navbar/>
  
    <div className="max-w-7xl mx-auto p-4">
    {/* About Section */}
    <section className="text-center py-8">
      <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome to Our Bookstore! We offer a wide range of free and paid books for download. 
        Whether you're an avid reader or just starting, we have something for everyone.
      </p>
    </section>

    {/* Mission & Vision */}
    <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          To make reading accessible to everyone, providing a vast collection of books available for digital 
          download.
        </p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Our Vision</h2>
        <p className="mt-4 text-gray-600">
          We aim to provide an all-in-one platform for book lovers, where they can easily download their 
          favorite books.
        </p>
      </div>
    </section>

    {/* Contact Info */}
    <section className="mt-12 bg-gray-50 py-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Contact Us</h2>
      <div className="text-center mt-4">
        <p className="text-lg text-gray-600">Email: <a href="mailto:mdnomankaif55@gmail.com" className="text-green-600">mdnomankaif55@gmail.com</a></p>
        <p className="text-lg text-gray-600">Phone: +91 6302741807</p>
        <p className="text-lg text-gray-600">Address: Attapur, Hyderabad, 500030, India</p>
      </div>
    </section>

    {/* Payment & Book Access */}
    <section className="mt-12 text-center">
      <h2 className="text-2xl font-semibold text-gray-700">Access & Payment</h2>
      <p className="mt-4 text-lg text-gray-600">
        Our platform allows you to download both free and paid books. 
        For paid books, we offer secure payment processing through Razorpay.
      </p>
      <button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg">Browse Books</button>
    </section>
  </div>
  </>
   )

 }