import React, {useState} from "react";
import pricingPlan from "../assets/PricingAllInOne.png";
import { useScreensize } from "../hooks/useScreenSize";
import Sec6Card from "../components/Sec6Card";
import Button from '../components/Button';
import { title, list, subListContent } from "../contents/Sec6Content";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export default function Sec6({isPay}) {
  const { screenSize } = useScreensize();
  const {user} = useUserContext();

  const navigate = useNavigate();

  return (
    <div>
      {screenSize.dynamicWidth <= 600 ? (
        <div className="w-full h-full p-10 bg-slate-100">
          <Sec6Card />
        </div>
      ) : (
        <div className="w-full h-[80vh] relative bg-slate-100">
          <div className="sm:h-[900px] sm:w-[900px] bg-white m-auto relative top-20 rounded-xl">
            <h1 className="sm:text-3xl lg:text-4xl font-bold sm:w-[600px] m-auto relative sm:top-20 lg:top-32">
              {title}
            </h1>

            <div className="grid grid-flow-col">
              <div className="sm:order-last sm:h-[600px] sm:w-[600px] lg:w-[700px]">
                <img className="sm:mt-40 lg:mt-20" src={pricingPlan} alt="" />
              </div>

              <div className="w-[400px] relative m-auto text-right ml-4">
                {list}
              </div>
            </div>
            <div className="w-[400px] relative bottom-32 text-right">
              <h2 className="font-bold">{subListContent}</h2>
            </div>
            {isPay ? <div>
              <Button trigger={()=>{navigate("/bijumpcourse")}} BtnName={'מעבר לקורס'} bgColor="pink"/>
            </div>
            : <div hidden={user ? true : false}>
            <Button trigger={()=>{navigate("/register")}} BtnName={'לרכישה במחיר השקה 599 ש"ח'} bgColor="pink"/>
            <p className="font-bold">
              במקום <span className="line-through">749</span>
            </p>
          </div>
            }
           
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <button className="bg-pink-400 p-6 pr-10 pl-10 rounded-3xl text-white text-xl font-bold">לרכישה במחיר השקה 599 ש"ח</button> */
}
