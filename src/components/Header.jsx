import React from "react";

const Header = () => {
  return (
    <header>
      <div className="relative h-screen bg-black">
        <video
          autoPlay={true}
          muted
          loop
          className="h-screen w-full object-cover"
        >
          <source type="video/mp4" src="./pexels-ibrahim-bennett-6358093.mp4" />
        </video>
        <div className="absolute bottom-0 flex h-screen w-full items-center justify-center bg-black text-white opacity-30"></div>
        <div className="absolute bottom-0 w-full gap-5 space-y-4 p-9 text-white lg:flex lg:justify-between lg:p-36">
          <div>
            <h1 className="text-4xl font-extralight lg:text-6xl lg:font-light lg:leading-[1.1]">
              Discover <br /> Joshua Tree
            </h1>
            <p className="mt-4 font-light tracking-wider">
              Learn more about this surreal desert landscape
            </p>
          </div>
          <a
            href="#details"
            className="flex h-11 w-11 items-center justify-center border border-solid border-white lg:self-end"
          >
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
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
