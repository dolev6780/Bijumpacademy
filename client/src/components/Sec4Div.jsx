import React from "react";

export default function Sec4Div({ img, text, title, divTitleSpan, order }) {
  return (
    <div className="text-white p-10 relative sm:grid sm:grid-flow-col">
      <img
        style={{ order: order }}
        className="lg:w-[500px] m-auto"
        src={img}
        alt=""
      />
      <div className="lg:w-[600px] sm:text-right m-auto sm:shadow-md sm:shadow-pink-600 p-4">
        <h1 className="text-2xl lg:text-4xl font-bold">
          {title} <span className="text-pink-300">{divTitleSpan}</span>
        </h1>
        {text}
      </div>
    </div>
  );
}
