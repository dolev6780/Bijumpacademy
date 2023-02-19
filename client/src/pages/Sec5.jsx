import React from "react";
import Sec5Card from "../components/Sec5Card";
import { useScreensize } from "../hooks/useScreenSize";
import Stepper from '../components/Stepper';
import {
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubTitle1,
  cardSubTitle2,
  cardSubTitle3,
  list1,
  list2,
  list3,
  skipLevel1,
  skipLevel2,
  skipLevel3,
} from "../contents/Sec5Content";

export default function Sec5() {
  const { screenSize } = useScreensize();

  return (
    <div>
      {screenSize.dynamicWidth <= 700 ? (
        <div className="w-full h-full p-10 text-white bg-neutral-800">
          <h1 className="font-bold text-2xl">
            גישה מלאה לכל הרמות
          </h1>
          <div>
            <Stepper/>
          </div>
        </div>
      ) : (
        <div
          className="text-white w-full h-full relative bg-neutral-800
      "
        >
          <h1 className="text-4xl font-bold relative top-10">
            גישה מלאה לכל הרמות
          </h1>
          <div
            className="relative justify-center mt-32 bottom-16
        sm:flex"
          >
            <Sec5Card
              title={cardTitle3}
              subTitle={cardSubTitle3}
              text={list3}
              skipLevel={skipLevel3}
            />
            <Sec5Card
              title={cardTitle2}
              subTitle={cardSubTitle2}
              text={list2}
              skipLevel={skipLevel2}
            />
            <Sec5Card
              title={cardTitle1}
              subTitle={cardSubTitle1}
              text={list1}
              skipLevel={skipLevel1}
            />
          </div>
        </div>
      )}
    </div>
  );
}
