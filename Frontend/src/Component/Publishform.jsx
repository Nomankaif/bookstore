import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Toaster,toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from '../Config';
const Publishform = () => {
    const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      booktitle: '',
      bookauthor: '',
      genre: '',
      description: '',
      price: '',
      coverImage: null
    }
  });

  const onSubmit = async(data) => {
    
    const users=JSON.parse(localStorage.getItem("user"))
    const userId=users.id
    const newbook={
        booktitle:data.booktitle,
        bookauthor:data.bookauthor,
        genre:data.genre,
        description:data.description,
        price:data.price
    }    
    await axios.post(`${BASE_URL}/user/book/upload/${userId}`,newbook)
    .then((res) => {
        console.log(res.data);
        if (res.data) {
            toast.success("done")
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response?.data?.message || "Something went wrong");
      });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-8 space-y-4">
          <div className="flex justify-center">
            <svg
              className="w-10 h-10 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-600">
            Publish Your Book
          </h2>
          <p className="text-center text-gray-500">
            Share your story with the world. Fill in the details below to get started.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          {/* Title and Author Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Book Title
              </label>
              <input
                {...register("booktitle", { 
                  required: "Book title is required",
                  minLength: { value: 2, message: "Title must be at least 2 characters" }
                })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter book title"
              />
              {errors.booktitle && (
                <p className="text-red-500 text-sm">{errors.booktitle.message}</p>
              )}
            </div>

            {/* Author Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Author Name
              </label>
              <input
                {...register("bookauthor", { 
                  required: "Author name is required",
                  minLength: { value: 2, message: "Author name must be at least 2 characters" }
                })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter author name"
              />
              {errors.bookauthor && (
                <p className="text-red-500 text-sm">{errors.bookauthor.message}</p>
              )}
            </div>
          </div>

          {/* Genre */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Genre
            </label>
            <select
              {...register("genre", { required: "Please select a genre" })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Select a genre</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="sci-fi">Science Fiction</option>
              <option value="fantasy">Fantasy</option>
              <option value="biography">Biography</option>
            </select>
            {errors.genre && (
              <p className="text-red-500 text-sm">{errors.genre.message}</p>
            )}
          </div>

          {/* Cover Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Book Cover
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 text-gray-400 mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-gray-500">Drop your cover image here</p>
                  <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                </div>
                <input 
                  type="file"
                  className="hidden"
                  {...register("coverImage", { required: "Book cover is required" })}

                  accept="image/png,image/jpeg"
                />
              </label>
            </div>
            {errors.coverImage && (
              <p className="text-red-500 text-sm">{errors.coverImage.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Book Description
            </label>
            <textarea
              {...register("description", { 
                required: "Book description is required",
                minLength: { value: 5, message: "Description must be at least 50 characters" }
              })}
              rows="4"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Write a compelling description of your book..."
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          {/* Price */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                $
              </span>
              <input
                type="number"
                step="0.01"
                {...register("price", { 
                  required: "Price is required",
                  min: { value: 0.99, message: "Price must be at least $0.99" },
                  pattern: { value: /^\d+(\.\d{1,2})?$/, message: "Invalid price format" }
                })}
                className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="0.00"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Publish Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Publishform;