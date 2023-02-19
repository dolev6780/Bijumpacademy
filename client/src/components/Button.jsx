import React from 'react'

export default function Button({ trigger, BtnName, bgColor}) {
  return (
    <div>
         <button style={{backgroundColor:bgColor}}
        className="text-white font-bold rounded-xl w-72 p-3
        lg:rounded-2xl 
        lg:p-4 mt-16 lg:w-96 transition-all duration-200 ease-out
        hover:cursor-pointer hover:scale-110 hover:ease-in
        "
        onClick={trigger}
      >
        {BtnName}
      </button>
    </div>
  )
}
