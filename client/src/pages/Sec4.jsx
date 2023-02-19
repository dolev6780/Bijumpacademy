import React from "react";
import Sec4Div from "../components/Sec4Div";
import Section4Div1 from "../assets/Section4Div1.png";
import Section4Div2 from "../assets/Section4Div2.png";
import Section4Div3 from "../assets/Section4Div3.png";
import Card from '../components/Card'
import { useScreensize } from "../hooks/useScreenSize";
import {
  div1Title,
  div1Text,
  div2Text,
  div2Title,
  div3Text,
  div3Title,
  div3TitleSpan,
} from "../contents/Sec4Content";

export default function Sec4() {
  const { screenSize } = useScreensize();

  return (
    <div className="w-full bg-black">
      {screenSize.dynamicWidth <= 700 ? (
        <div className="w-full h-full relative p-10">
          <Card title={div1Title} img={Section4Div1} text={div1Text}/>
          <Card title={div2Title} img={Section4Div2} text={div2Text}/>
          <Card title={div3Title} subTitle={div3TitleSpan} img={Section4Div3} text={div3Text}/>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <Sec4Div
            img={Section4Div1}
            text={div1Text}
            title={div1Title}
            order={"0"}
          />
          <Sec4Div
            img={Section4Div2}
            text={div2Text}
            title={div2Title}
            order={"1"}
          />
          <Sec4Div
            img={Section4Div3}
            text={div3Text}
            title={div3Title}
            divTitleSpan={div3TitleSpan}
            order={"1"}
          />
        </div>
      )}
    </div>
  );
}
