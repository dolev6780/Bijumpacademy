import React from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import DropdownMenu from "./DropdownMenu";
import { useScreensize } from "../hooks/useScreenSize";
export default function Navbar() {
  const navigate = useNavigate();
  const { screenSize } = useScreensize();
  return (
    <div>
      {/* mobile */}
      {screenSize.dynamicWidth <= 700 ? (
        <div>
          <div
            className=" font-bold text-white 
    flex items-center justify-between
     p-4 z-[100] w-full bg-inherit fixed"
          >
            <div className="bg-black absolute w-full h-24 -z-10 opacity-80 inset-0 box-border"></div>
            <a href="#sec1">
              <h1
                onClick={() => navigate("/")}
                className="text-xl cursor-pointer mt-4"
              >
                B.I JUMP ACADEMY
              </h1>
            </a>
            <div className="mt-2">
              <DropdownMenu />
            </div>
          </div>
        </div>
      ) : (
        /* desktop */
        <div
          className="font-bold text-white 
    flex items-center justify-between
     p-4 z-[100] w-full bg-inherit fixed"
        >
          <div className="bg-black absolute w-full h-24 -z-10 opacity-80 inset-0 box-border"></div>
          <DropdownMenu />
          <div className="flex justify-center items-center mr-2">
            <a href="#contactus">
              <button className="mr-8 text-xl hover:scale-105">צור קשר</button>
            </a>
            <a
              href="https://www.instagram.com/coach_inon/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton className="hover:scale-110">
                <InstagramIcon fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </a>
            <a href="#sec1">
              <h1
                onClick={() => navigate("/")}
                className="ml-8 text-3xl cursor-pointer hover:animate-pulse"
              >
                B.I JUMP ACADEMY
              </h1>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
