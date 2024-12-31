import React from 'react'
import { useAuth } from '../context/AuthProvider';
import { Toaster,toast } from 'react-hot-toast';

export const Logout = (props) => {
    const [Auth,setAuth]=useAuth();
    const handleLogout = () => {
        try {
          setAuth({
            ...Auth,
            user: null,
          });
          localStorage.removeItem("user");
          toast.success("Logout successfully");
    
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } catch (error) {
          toast.error("Error: " + error);
          setTimeout(() => {}, 2000);
        }
      };
    return (
        <div>
          <button
            className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
          onClick={()=>handleLogout()}
          >
            Logout
          </button>
        </div>
      );
 }