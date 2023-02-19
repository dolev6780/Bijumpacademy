import React, { useState } from "react";
import sec3Img from "../assets/sec3Img.png";
import background2 from "../assets/Background2.png";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export default function Sec3({ isPay }) {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <div className="justify-center items-center bg-neutral-800 w-full grid grid-flow-col">
      <img
        className="order-last z-10 relative
     
       sm:w-[50%] sm:left-[50%] "
        src={sec3Img}
        alt=""
      />
      <div>
        <img
          className="h-[150px]
          sm:h-[300px] sm:w-[900px]
          lg:h-[300px] lg:w-[900px] absolute z-0 rounded-3xl "
          src={background2}
          alt=""
        />
        <div
          className="z-10 relative mt-5
          sm:mt-[70px] w-[200px] text-white
          sm:left-[100%]"
        >
          <p
            className="text-xl font-bold w-[200px] ml-14
            sm:text-4xl sm:w-[300px]
            lg:text-5xl lg:w-[400px] m-auto"
          >
            האירובי שלכם לא יהיה משעמם יותר
          </p>
          {isPay ? (
            <button
              onClick={() => {
                navigate("/bijumpcourse");
              }}
              className="p-2 mt-2 bg-pink-300 rounded-lg font-bold ml-20
             sm:p-4 sm:mt-6 
            sm:absolute sm:ml-8 w-[150px] hover:scale-110 transition-all
            "
            >
              מעבר לקורס
            </button>
          ) : (
            <button
              disabled={user ? true : false}
              style={user ? { backgroundColor: "gray" } : null}
              onClick={() => {
                navigate("/register");
              }}
              className="p-2 mt-2 bg-pink-300 rounded-lg font-bold ml-20
             sm:p-4 sm:mt-6 
            sm:absolute sm:ml-8 w-[150px] hover:scale-110 transition-all
            "
            >
              !אני רוצה לעוף
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
