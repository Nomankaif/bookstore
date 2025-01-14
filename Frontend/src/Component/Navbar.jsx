import React, { useEffect, useState } from "react";
import { Login } from "./Login";
import { useAuth } from "../context/AuthProvider";
import { Logout } from "./Logout";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [Auth, setAuth] = useAuth();

  const [theme, updateTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");

      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navitem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/courses">Best Books</a>
      </li>
      <li>
        <a href="/cart">Cart</a>
      </li>
      <li>
        <a href="/publish">Publish Book</a>
      </li>
      <li>
        <a href="/profile">profile</a>
      </li>
    </>
  );

  return (
    <>
      <div >
        <div
          className={`  navbar bg-base-100 fixed justify-between dark:bg-slate-700 dark:text-white top-0 left-0 right-0 ${
            sticky
              ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
              : ""
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navitem}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">BOOKSTORE</a>
          </div>
          <div className="navbar-center hidden lg:flex  px-4">
            <ul className="menu menu-horizontal px-1">{navitem}</ul>
            
           
            <div>
            <Link to="/profile">
              <div className="flex items-center justify-center p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM3.75 20.25a8.25 8.25 0 0116.5 0"
                  />
                </svg>
              </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
