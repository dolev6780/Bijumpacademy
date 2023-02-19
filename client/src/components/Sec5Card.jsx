import React from "react";

export default function Sec5Card({ title, subTitle, text, skipLevel }) {
  return (
    <div
      className="sm:w-[300px] sm:h-[350px]
    lg:h-[400px] lg:w-[400px] bg-neutral-900 rounded-2xl text-right ml-5"
    >
      {skipLevel}
      <div className="mt-6 mr-4">
        <h1 className="text-xl font-bold ">{title}</h1>
        <h2 className="text-pink-400 font-bold">{subTitle}</h2>
        {text}
      </div>
    </div>
  );
}
