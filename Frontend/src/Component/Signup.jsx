import React from "react";
import { useForm } from "react-hook-form";
import { json, Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios"

function Signup() {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define onSubmit function to handle form submission
  const onSubmit =async (data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      password:data.password,
      confirmpassword:data.confirmpassword
    }

    await axios.post("http://localhost:4001/user/sign",userInfo)
    .then((res)=>{
      console.log(res.data.user);
      if(res.data){
        alert("Signup successfull")
        localStorage.setItem("user",JSON.stringify(res.data.user))
        navigate("/")
      
      }
     
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        alert(err.response.data.message)
      }
    })

  };


  // integrating sign up API


  // Function to open modal (ensure `my_modal_3` exists in DOM)
  const openModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal && modal.showModal) {
      modal.showModal();
    } else {
      console.error("Modal not found or showModal method is not supported.");
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg dark:text-black">Signup</h3>
              {/* Fullname */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Name</span>
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("confirmpassword", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
              {/* Buttons */}
              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have an account?{" "}
                  <Link to="/login">
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                   
                  >
                    Login
                  </button>
                  </Link>
                
                </p>
                {/* Include Login component if it renders a modal */}
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
