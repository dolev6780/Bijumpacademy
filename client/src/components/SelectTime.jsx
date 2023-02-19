import React from "react";

export default function SelectTime({ setSelect }) {
  return (
    <div>
      <select
        className="w-72 focus:w-64 p-3 rounded-xl text-right text-white
        lg:w-96 lg:mr-0 lg:focus:w-[26rem] lg:p-4 lg:rounded-2xl 
        placeholder-neutral-300 mt-4 focus:outline-none
        focus:placeholder-neutral-300 focus:text-neutral-300
          transition-all duration-500 ease-out
           bg-neutral-500 top-12 relative
          "
        name="time"
        id="time"
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <option value="10:00">10:00</option>
        <option value="11:30">11:30</option>
        <option value="13:00">13:00</option>
      </select>
    </div>
  );
}
