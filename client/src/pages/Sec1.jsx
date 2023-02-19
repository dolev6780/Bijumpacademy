import React, { useState } from "react";
import Sec1Image from "../assets/Sec1Image.png";
import TheyRunWeFly from "../assets/The Run We Fly.png";
//import BackgroundImg from '../assets/Background2.png'
import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

export default function Sec1({isPay}) {
  const navigate = useNavigate();
  const {user} = useUserContext();
  
  
  return (
    <div /*main container for section 1*/
      id="sec1"
      className="grid grid-flow-row top-20 relative
      sm:top-24
      lg:top-20 lg:grid-flow-col lg:grid-cols-2"
    >
      <div /*image div*/ className="order-1 mt-4 lg:order-3 ">
        <img
          className="
          rounded shadow-xl top-2 w-full h-[500px]
          sm:w-[600px] sm:h-[800px] sm:m-auto
          lg:w-[600px] lg:relative 
          xl:h-[1000px] xl:w-[800px]
        "
          src={Sec1Image}
          alt="bijump"
        />
      </div>

      <div /*text div*/
        className="order-2 text-white  
      lg:order-1 lg:ml-auto lg:mb-auto lg:mt-auto"
      >
        <h1
          className="text-3xl font-bold mt-4
          lg:text-5xl lg:text-right lg:mr-20
          xl:text-7xl"
        >
          קורס הדילגית
          <span className="text-pink-300">
            <br />
            שילמד אותך לעוף
          </span>
        </h1>
        <p
          className="mt-4
          sm:w-[500px] sm:m-auto
          lg:text-right lg:ml-auto lg:mt-8 lg:mr-16
         xl:mr-24 xl:text-xl"
        >
          הקורס היחידי בארץ והמקיף ביותר של האירובי הכי מגניב שקיים, אחרי הקורס
          נדע לבצע כל תנועה אפשרית שקיימת בדילגית בצורה הכי יפה ומושלמת שיש
          והדבר הכי הכי חשוב ללמוד להנות מכל שניה באירובי שלך
        </p>
        <div className="mt-6 mb-6">
          <a href="#sec2">
            <button className="mr-2 shadow-neutral-900 shadow-md p-4 rounded-xl font-bold
            hover:bg-pink-300 transition-all hover:shadow-none">
              לצפייה בוידאו
            </button>
          </a>
          {isPay ? (
            <button onClick={() => {
              navigate("/bijumpcourse");
            }}
             className="ml-2 bg-pink-300 p-4 rounded-xl font-bold
            lg:mt-8  lg:ml-10 hover:scale-110 transition-all hover:animate-spin">מעבר לקורס</button>
          ) : (
            <button
            disabled={user ? true : false}
            style={user ? {backgroundColor:"gray"}:null}
              onClick={() => {
                navigate("/register");
              }}
              className="ml-2 bg-pink-300 p-4 rounded-xl font-bold
 lg:mt-8  lg:ml-10 hover:scale-110 transition-all hover:animate-spin"
            >
              הרשמה לקורס
            </button>
          )}
        </div>
      </div>

      <div
        className="order-3 relative w-full 
      sm:
      md:
      lg:absolute lg:top-full
      "
      >
        {/*they run image div*/}
        <img
          className="lg:w-full lg:h-[150px]
        xl:h-[180px] "
          src={TheyRunWeFly}
          alt=""
        />
      </div>
      {/*div container end*/}
    </div>
  );
}
