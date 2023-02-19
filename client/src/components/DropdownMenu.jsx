import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { useLogout } from "../hooks/useLogout";
import { useScreensize } from "../hooks/useScreenSize";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function DropdownMenu() {
  const { screenSize } = useScreensize();
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const { user } = useUserContext();
  const { logout } = useLogout();
  const navigate = useNavigate();
  const username = user?.user?.firstName + " " + user?.user?.lastName;
  const toggleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };
  const login = () => {
    navigate("/login");
  };
  const logoutTrigger = () => {
    logout();
    setDisplayDropdown(!displayDropdown);
  };
  return (
    <div>
      {screenSize.dynamicWidth <= 700 ? (
        <div>
          <div className="">
            <button
              className="transition-all duration-500 ease-out
              shadow-sm active:shadow-none shadow-white p-3 pr-5 pl-5 text-white rounded-full"
              onClick={user ? toggleDropdown : login}
            >
              {user ? username : "כניסת משתמשים"}
            </button>
            <div
              hidden={!displayDropdown}
              className="text-right text-white absolute bg-black h-[400px]
        w-[150px] right-0 p-6 rounded-lg opacity-80 
        transition-all duration-500 ease-out
        "
            >
              <ul className="">
                <a
                  href="#contactus"
                  onClick={() => {
                    setDisplayDropdown(!displayDropdown);
                  }}
                >
                  <li className="mt-2 cursor-pointer">צור קשר</li>
                </a>
                <li
                  onClick={() => {
                    navigate("/bijumpcourse");
                    setDisplayDropdown(!displayDropdown);
                  }}
                  className="mt-2 cursor-pointer"
                >
                  הקורס שלי
                </li>
                <li onClick={logoutTrigger} className="mt-2 cursor-pointer">
                  התנתק
                </li>
              </ul>
              <hr className="relative mt-5" />
              <div className="bottom-2 right-2 absolute">
                <InstagramIcon fontSize="medium" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button
            className="shadow-sm active:shadow-none shadow-white p-3 pr-5 pl-5 text-white rounded-full"
            onClick={user ? toggleDropdown : login}
          >
            {user ? username : "כניסת משתמשים"}
          </button>
          <div
            hidden={!displayDropdown}
            className="text-right text-white absolute bg-black h-[400px]
        w-[150px] left-0 p-6 rounded-lg opacity-80 
        transition-all duration-500 ease-out
        "
          >
            <ul className="">
              <li
                onClick={() => {
                  navigate("/bijumpcourse");
                  setDisplayDropdown(!displayDropdown);
                }}
                className="mt-2 cursor-pointer"
              >
                הקורס שלי
              </li>
              <li onClick={logoutTrigger} className="mt-2 cursor-pointer">
                התנתק
              </li>
            </ul>
            <hr className="relative mt-5" />
            <div className="bottom-2 right-2 absolute">
              <InstagramIcon fontSize="medium" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
