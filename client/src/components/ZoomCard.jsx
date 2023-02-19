import React from "react";
import { useNavigate } from "react-router-dom";
import ZoomCardImg from "../assets/ZoomCardImg.png";
import Button from "./Button";

export default function ZoomCard() {
  const navigate = useNavigate();

  return (
    <div
      className=" relative top-6
    sm:h-[675px] sm:w-[600px] sm:m-auto"
    >
      <img
        className="sm:h-[675px] sm:w-[600px] absolute -z-10"
        src={ZoomCardImg}
        alt=""
      />
      <div className="m-auto relative top-44 sm:top-[17.7rem]">
        <h1 className="opacity-80 lg:opacity-100 w-[200px] m-auto text-3xl font-bold top-5 relative">
          מפגשי זום או פרונטלי 1:1
        </h1>
        <p className="w-[300px] m-auto top-10 relative">
          רוצים ללמוד ממני בלייב? אתם מוזמנים למפגש בפגישת וידיאו או פרונטלי 1:1
        </p>
        <Button
          trigger={() => {
            navigate("/zoom");
          }}
          BtnName={"לקביעת מפגש"}
          bgColor={"gray"}
        />
      </div>
    </div>
  );
}
