import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Header />

      <section
        id="details"
        className="flex items-center justify-center bg-[url('/images/sand-wavy-smooth-ripples.jpg')] bg-cover bg-fixed bg-no-repeat px-8 py-20 lg:grid lg:h-screen lg:grid-cols-2 xl:p-24"
      >
        <div className="-mr-52 hidden items-center justify-center lg:flex">
          <img
            src="./images/joshua-tree-motion-blur.jpg"
            alt="joshua trees caught in frame while motion blurred"
          />
        </div>
        <div className="flex items-center text-primary 2xl:py-32 2xl:px-24">
          <div className="bg-white p-11 lg:p-20">
            <h2 className="text-sm font-light ">welcome to joshua tree</h2>
            <p className="text-2xl font-extralight lg:text-5xl lg:leading-tight">
              A top destination for outdoor enthusiasts and nature lovers.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="xl:items-top px-8 py-20 text-primary lg:grid lg:grid-cols-2 2xl:h-half 2xl:items-center 2xl:px-40 "
      >
        <div className="lg:flex lg:h-1/2 lg:align-top">
          <h2 className="text-2xl font-light lg:mb-0 lg:text-5xl">
            About the park
          </h2>
        </div>
        <div className="lg:flex lg:h-1/2 lg:align-top">
          <p className="text-sm font-light leading-7 lg:text-xl lg:leading-loose">
            Located in Southern California, USA, Joshua Tree is a national park
            known for its rugged rock formations, Joshua trees, desert flora,
            and wildlife. Visitors can enjoy hiking, rock climbing, and
            stargazing, among other activities. Joshua Tree is a popular
            destination for outdoor enthusiasts and nature lovers.
          </p>
        </div>
      </section>

      <section className="p-0">
        <img
          src="./images/single-joshua-tree-starry-sky-backdrop.jpg"
          alt="a single joshua tree with a starry sky backdrop"
          className="h-half w-full object-cover lg:h-[75vh] xl:h-screen"
        />
      </section>

      <section className="bg-gray-100 py-20 px-8 font-light text-primary xl:px-40">
        <div>
          <h2
            id="activities"
            className="mb-11 text-center text-2xl lg:text-5xl"
          >
            park activities
          </h2>
        </div>
        <div>
          <Carousel></Carousel>
        </div>
      </section>

      <section
        id="preparation"
        className="grid items-center gap-16 px-8 py-20 font-light text-primary xl:h-screen xl:grid-cols-2 xl:px-40"
      >
        <div className="">
          <h2 className="text-2xl lg:text-5xl">preparation</h2>
          <p className="text-sm leading-8 lg:text-xl lg:leading-loose">
            Although the park welcomes visitors, there are some important
            details you need to remember for your trip. Consider the following:
          </p>
          <ul className="mt-4 list-disc text-sm leading-8 lg:text-xl lg:leading-loose">
            <li>There is no cell service throughout the park.</li>
            <li>Avoid strenuous activity during times of extreme heat.</li>
            <li>
              Protect yourself from the sun by wearing sunscreen, sunglasses,
              and a hat.
            </li>
            <li>
              Always keep an ample supply of water with you while traveling
              through the park, whether driving or hiking. We recommend a
              minimum of one gallon of water per person, per day; hikers and
              cyclists should carry two gallons per person, per day.
            </li>
          </ul>
        </div>
        <div className="relative hidden h-full items-center justify-center bg-black xl:flex">
          <img
            className="absolute -right-12 -bottom-12 z-0 h-full w-full object-cover"
            src="./images/fine-sand-tiny-dune-closeup.jpg"
            alt=""
          />
          <img
            className="absolute z-10 h-full w-full object-cover"
            src="./images/jeep-driving-desert-roads-dusk.jpg"
            alt="a lone jeep passing between desert terrain at dusk"
          />
        </div>
      </section>

      <section
        id="learn"
        className="bg-gray-100 px-8 py-20 font-light text-primary xl:px-40"
      >
        <div>
          <h2 className="text-2xl lg:text-5xl">learn more</h2>
          <p className="text-sm lg:text-xl lg:leading-loose">
            Click the following links to learn more about the park and to plan
            your visit
          </p>
          <ul className="mt-4 space-y-2 text-sm lg:text-xl lg:leading-loose">
            <li>
              <a href="https://www.nps.gov/jotr/index.htm">nps.gov</a>
            </li>
            <li>
              <a href="https://www.joshuatree.org/">joshuatree.org</a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Joshua_Tree,_California">
                wikipedia.org
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
