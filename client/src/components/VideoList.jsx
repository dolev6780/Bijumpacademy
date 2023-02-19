import React from "react";
import VideoCard from "../components/VideoCard";
export default function VideoList({ list, setUrl, setTitle }) {
  return (
    <div
      dir="RTL"
      className=" text-center w-full
                   rounded-xl top-40 relative"
    >
      {list.map((video) => {
        return (
          <button
            onClick={() => {
              setUrl(video.src);
              setTitle(video.title);
            }}
            className="hover:scale-110 transition-all duration-500 ease-out m-4"
          >
            <VideoCard
              title={video.title}
              cover={video.cover}
              time={video.time}
            />
          </button>
        );
      })}
    </div>
  );
}
