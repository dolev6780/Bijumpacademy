import React from "react";
import introduction from "../assets/introduction.mp4";
export default function Sec2() {
  return (
    <div id="sec2" className="bg-black w-full h-full">
      <div
        className="w-full h-full mt-20
        sm:mt-24
        lg:mt-56 lg:h-[55vh]
        xl:mt-64"
      >
        <div className="p-6">
          <video
            className="rounded-lg 
             lg:w-[550x] lg:h-[550px] lg:m-auto "
            src={introduction}
            controls
          />
        </div>
        <div className="text-white
          sm:grid sm:grid-flow-col
           lg:w-[970px] lg:m-auto">
          <div className="order-3">
            <p className=" w-[300px] m-auto mb-10
            lg:text-right lg:ml-36">
              להצטרף לקהילה של אנשים שעושים את האירובי הכי מגניב שיש בעולם,
              למעלה מ50 שיעורים שבכל שיעור נלמד מיומנות חדשה
            </p>
          </div>
          <div className="order-2 mb-10 lg:mr-20">
            <p className="text-4xl  font-bold mb-2 xl:text-right">50+</p>
            <p className="text-2xl">שיעורים מוקלטים</p>
          </div>
          <div className="order-1 lg:mr-20">
            <p className="text-4xl font-bold mb-2 xl:text-right ">13+</p>
            <p className="text-2xl">שעות צפיה</p>
          </div>
        </div>
      </div>
    </div>
  );
}
