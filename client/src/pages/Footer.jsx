import React from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white relative top-72 sm:top-0">
      <div
        className=" 
    flex items-center justify-between
     p-4 z-[100] w-full"
      >
        <div className="bg-black absolute w-full h-24 -z-10 opacity-80 inset-0 box-border"></div>
        <a
              href="https://www.instagram.com/coach_inon/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton className="hover:scale-110">
                <InstagramIcon fontSize="large" sx={{ color: "black" }} />
              </IconButton>
            </a>

        <div className="flex justify-center items-center mr-2">
          <button className="mr-8">מדיניות פרטיות</button>
          <button className="mr-8">תקנון</button>
          <a href="#sec1"><button
            onClick={() => navigate("/")}
            className="ml-8 text-xl font-bold"
          >
            B.I JUMP ACADEMY
          </button></a>
        </div>
      </div>
      <div className="text-right mr-6 bottom-2 relative">
        <h1><span className="font-bold">C.A.I Software Solutions</span> נבנה ע"י</h1>
      </div>
    </div>
  );
}
