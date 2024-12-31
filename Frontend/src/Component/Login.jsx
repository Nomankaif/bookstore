import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import axios from "axios";
import { Toaster,toast } from "react-hot-toast";

export const Login = (props) => {
  const [login, setLogin] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit =async (data) => {

    const userInfo={
      email:data.email,
      password:data.password
    }


    await axios.post("https://bookstore-1-khy1.onrender.com/user/check/login",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Logined successful');
        localStorage.setItem("user",JSON.stringify(res.data.user))
        navigate("/")
        window.location.reload();
       
      }
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        alert(err.response.data.message)
      }
    })
  }

  function LoginControll() {
    setLogin(true);
    document.getElementById("my_modal_3").showModal(); // Open the modal
  }

  return (
    <>
      {/* Button to open the modal */}
     

      {/* Modal dialog */}
      
        <div className="modal-box">
          {/* Attach handleSubmit to the form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg dark:text-black">Login</h3>

            <div className="mt-4 space-y-2">
              <span className="dark:text-black">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span className="dark:text-black">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-500">This field is required</span>}
            </div>

            {/* Confirm Password field - only shown when `login` is true */}
            {login && (
              <div className="mt-4 space-y-2">
                <span className="dark:text-black">Confirm Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            )}

            <div className="flex justify-around mt-6">
              <button
                type="submit" // Set button type to "submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p className="dark:text-black">
                Not registered?
                <span
                  className="text-blue-500 underline pl-2 cursor-pointer"
                  onClick={LoginControll}
                >
                  <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
                </span>
              </p>
            </div>
          </form>
        </div>
 
    </>
  );
};
export default Login