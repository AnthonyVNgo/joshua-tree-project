import React from "react";
import { useState, useRef } from "react";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <header>
      <div className="relative h-screen bg-black">
        <video
          autoPlay={true}
          muted
          loop
          ref={videoRef}
          className="h-screen w-full object-cover"
        >
          <source type="video/mp4" src="./production ID_4797159.mp4" />
        </video>
        <div className="absolute bottom-0 flex h-screen w-full items-center justify-center bg-gray-900 text-white opacity-10"></div>
        <div className="absolute bottom-0 w-full gap-5 space-y-4 p-9 text-white lg:flex lg:justify-between lg:p-36">
          <div>
            <h1 className="text-4xl font-extralight lg:text-6xl lg:font-light lg:leading-[1.1]">
              Discover <br /> Joshua Tree
            </h1>
            <p className="mt-4 tracking-wider">
              Learn more about this surreal desert landscape
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              className="flex h-11 w-11 transform items-center justify-center border border-solid transition duration-200 hover:scale-110 lg:self-end"
              onClick={handlePlayPause}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              aria-pressed={isPlaying ? "false" : "true"}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              )}
            </button>
            <a
              href="#details"
              className="flex h-11 w-11 transform items-center justify-center border border-solid transition duration-200 hover:scale-110 lg:self-end"
              aria-label="skip to main"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={"1.5"}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
