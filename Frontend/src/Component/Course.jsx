  import React, { useEffect, useState } from "react";
  import Cards from "./Card";
  import axios from "axios";
  import { Sellcard } from "./Sellcard";
  export const Course = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
      const getbook = async () => {
        const users=JSON.parse(localStorage.getItem("user"))
        const userId=users.id
        try {
          const res = await axios.get(`https://bookstore-1-khy1.onrender.com/user/getall/publishbooks/${userId}`);
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              assumenda? Repellendus, iste corrupti? Tempore laudantium
              repellendus accusamus accusantium sed architecto odio, nisi expedita
              quas quidem nesciunt debitis dolore non aspernatur praesentium
              assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
              animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
              consequatur!
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
