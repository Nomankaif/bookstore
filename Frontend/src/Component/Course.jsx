  import React, { useEffect, useState } from "react";
  import Cards from "./Card";
  import axios from "axios";
  import { BASE_URL } from "../Config";
  import { Sellcard } from "./Sellcard";
  export const Course = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
      const getbook = async () => {
        const users=JSON.parse(localStorage.getItem("user"))
        const userId=users.id
        try {
          const res = await axios.get(`${BASE_URL}/user/getall/publishbooks/${userId}`);
          console.log(res.data);
          setBook(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getbook()
    },[]);

    return (
      <>
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">
              We're delighted to have you{" "}
              <span className="text-pink-500"> Here! :)</span>
            </h1>
            <p className="mt-12">
            Welcome to our bookstore website, your ultimate destination for a wide variety of
             books that cater to every reader's taste. Whether you're a fan of thrilling fiction, 
             insightful non-fiction, or academic resources, we have something for everyone. Explore 
             our collection of bestsellers, rare finds, and free offerings to fuel your passion for reading. W
             ith a user-friendly interface, seamless navigation, and secure checkout, we make your book shopping 
             experience convenient and enjoyable. Dive into the world of
             knowledge and imagination with our curated selection. Start your journey today and let us bring stories to your doorstep!
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {book.map((item,index) => (
              <Sellcard item={item} key={index} />
            ))}
          </div>
        </div>
      </>
    );
  };
