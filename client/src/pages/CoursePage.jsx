import React, { useState } from "react";
import ReactPlayer from "react-player";
import { courseVideo1 } from "../contents/Videos";
import VideoList from "../components/VideoList";
export default function CoursePage() {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=pMkbDAwv6d4");
  const [title, setTitle] = useState("");
  return (
    <div>
      <div
        className="bg-black w-3/4 p-10
    sm:
    md:
    lg:
    relative m-auto top-32
    rounded-xl"
      >
        <ReactPlayer width={"100%"} controls={true} playing url={url} />
        <h1 className="text-white relative top-5 font-bold text-2xl">
          {title}
        </h1>
      </div>
      <div className="grid grid-flow-col grid-row-3">
      <VideoList list={courseVideo1} setUrl={setUrl} setTitle={setTitle} />
      </div>
    </div>
  );
}
