import { useState } from "react";

const Carousel = () => {
  let [count, setCount] = useState(0);
  const activityData = [
    {
      title: "hiking",
      description:
        "Joshua Tree offers a variety of hiking trails for all skill levels, from short nature walks to challenging backcountry treks.",
      imageUrl: "../public/images/joshua-tree-rocky-terrain-mountain-dusk.jpg",
    },
    {
      title: "camping",
      description:
        "The park offers several campgrounds for both tent and RV camping, allowing visitors to experience the beauty of Joshua Tree for multiple days.",
      imageUrl: "../public/images/lit-tent-camping-evening-desert-plants.jpg",
    },
    {
      title: "stargazing",
      description:
        "Joshua Tree is known for its clear night skies, making it a popular destination for stargazers and astrophotographers.",
      imageUrl: "../public/images/starry-sky-rock-formations-illuminated.jpg",
    },
  ];
  const lastIndex = activityData.length - 1;

  const handleIncrement = () => {
    if (count === lastIndex) {
      setCount(0);
    } else setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      setCount(lastIndex);
    } else setCount(count - 1);
  };

  return (
    <>
      <div className="text-primary lg:w-fit">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center">
          <div className="col-span-1 lg:-mr-56">
            <img
              src={activityData[count].imageUrl}
              alt=""
              className="m-0 object-cover lg:h-full lg:w-full"
            />
          </div>
          <div className="col-span-1 2xl:py-32 2xl:px-28">
            <div className="bg-white px-9 py-11 lg:py-32">
              <h2 className="text-2xl lg:text-3xl">
                {activityData[count].title}
              </h2>
              <p className="text-sm leading-8 lg:text-xl lg:leading-loose">
                {activityData[count].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center">
        <div className="flex items-center space-x-4">
          <button onClick={handleDecrement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button onClick={handleIncrement}>
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
