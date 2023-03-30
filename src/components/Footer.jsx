import React from "react";

function Footer() {
  return (
    <footer className="bg-primary px-8 pt-11 text-sm font-light text-white lg:p-0">
      <div className="lg:grid lg:grid-cols-3">
        <div className="hidden items-center justify-center bg-white text-black lg:flex">
          <img
            src="./images/joshua-tree-facts-logo.jpg"
            alt="website logo"
            className="w-1/3"
          />
        </div>

        <div className="lg:col-span-2 lg:p-24">
          <div className="grid items-stretch  gap-6 lg:grid-cols-4">
            <div className="lg:col-span-2 xl:col-span-1">
              <h2>Connect</h2>
              <ul className="space-y-2 lg:text-base">
                <li>
                  <span className="mr-2">I:</span>
                  <a href="">
                    <span className="">Instagram</span>
                  </a>
                </li>
                <li>
                  <span className="mr-2">T:</span>
                  <a href="">
                    <span className="">(555)-555-5555</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-4 lg:col-span-2 lg:col-start-3">
              <div className="grid grid-cols-2">
                <nav aria-label="page-sections">
                  <ul className="space-y-2 lg:text-base">
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#activities">Activities</a>
                    </li>
                    <li>
                      <a href="#preparation">Preparation</a>
                    </li>
                    <li>
                      <a href="#learn">Learn</a>
                    </li>
                  </ul>
                </nav>
                <nav aria-label="resources">
                  <ul className="space-y-2 text-xs lg:text-base">
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
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs capitalize text-gray-400">
              2023 all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
