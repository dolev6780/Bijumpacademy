import React, { useState } from "react";
import sec7img from "../assets/InonHoldingaskippingrope.png";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export default function Sec7({ isPay }) {
  const navigate = useNavigate();
  const {user} = useUserContext();
  return (
    <div
      className="w-full h-full relative text-white bg-pink-400 
       lg:h-[384px] "
    >
      <div className="lg:grid lg:grid-flow-col lg:relative">
        <div
          className="
        lg:w-[500px] lg:relative lg:bottom-[50px] order-last"
        >
          <img className="w-[345px] m-auto lg:w-[500px]" src={sec7img} alt="" />
        </div>
        <div
          className="ml-2 lg:mr-10 absolute bottom-16 sm:ml-32 lg:ml-auto
        sm:m-auto sm:w-[600px] lg:bottom-0
         lg:relative"
        >
          <h1 className="text-3xl font-bold lg:text-5xl">
            מרחק קליק אחד משינוי תבנית האירובי שלכם לנצח
          </h1>
          {isPay ? (
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-black opacity-70 lg:opacity-100 lg:bg-white text-pink-400 p-4 rounded-2xl font-bold mt-5 lg:mt-10 hover:scale-110 transition-all"
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
              className="bg-black opacity-70 lg:opacity-100 lg:bg-white text-pink-400 p-4 rounded-2xl font-bold mt-5 lg:mt-10 hover:scale-110 transition-all"
            >
              אני רוצה לעוף
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
