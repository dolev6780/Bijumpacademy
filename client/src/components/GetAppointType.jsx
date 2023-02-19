import React from "react";

export default function GetAppontType({setInput}) {
  return (
    <div className="w-72 focus:w-64 p-3 rounded-xl text-right 
    lg:w-96 lg:mr-0 lg:focus:w-[26rem] lg:p-4 lg:rounded-2xl 
    placeholder-neutral-300 mt-4 focus:outline-none
    focus:placeholder-neutral-300 focus:text-neutral-300
      transition-all duration-500 ease-out
       bg-neutral-500 top-12 relative
      ">
      <p className="text-white font-bold">:אני רוצה שהמפגש יתקיים ב</p>
      <div className=" text-white text-right">
        <label htmlFor="zoom">זום</label>
        <input
          className="ml-2"
          type="radio"
          id="zoom"
          name="appoint"
          value="zoom"
          onChange={(e)=>{setInput(e.target.value)}}
        />
        <br />
        <label htmlFor="front">פרונטלי</label>
        <input
          className="ml-2"
          type="radio"
          id="front"
          name="appoint"
          value="front"
        onChange={(e)=>{setInput(e.target.value)}}        
        />
      </div>
    </div>
  );
}
