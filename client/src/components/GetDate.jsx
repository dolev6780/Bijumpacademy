import React, {useState} from "react";

export default function GetDate({setInput}) {
    const initDate = new Date().toISOString().substring(0,10);
    const [date, setDate] = useState(initDate)
  return (
    <div >
      <input
        className="w-72 focus:w-64 p-3 rounded-xl text-right text-white
        lg:w-96 lg:mr-0 lg:focus:w-[26rem] lg:p-4 lg:rounded-2xl 
        placeholder-neutral-300 mt-4 focus:outline-none
        focus:placeholder-neutral-300 focus:text-neutral-300
          transition-all duration-500 ease-out
           bg-neutral-500 top-12 relative
          "
        type={"date"}
        value={date}
        onChange={(e) => {
            setDate(e.target.value)
            setInput(e.target.value)
        }}
      />
    </div>
  );
}
