import React from "react";
import { ArrowRight } from "react-feather";

import { CollectionCard, Hero, ServiceSection } from "../components";
import { collections } from "../utils/api";

const Home = () => {
  return (
    <div>
      <Hero />
      <section
        id="collections"
        className="px-6 py-10 h-auto flex-col items-center justify-center my-12"
      >
        <h1 className="text-gray-900 font-bold text-6xl opacity-40">
          Collections
        </h1>
        <div className="w-full h-auto">
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-12 mx-auto px-6"
            style={{ minWidth: "300px" }}
          >
            {collections.map((collection) => (
              <CollectionCard key={collection.id} {...collection} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="mission"
        className="px-6 py-20 flex items-center justify-center"
      >
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full">
          <div className="my-4">
            <h1 className="text-gray-900 font-bold text-6xl opacity-40">
              Our Mission
            </h1>
            <div className="my-3 p-2">
              <p className="text-2xl font-normal">
                We are spreading the gospel of the rich African culture and
                history through fashion.
              </p>
              <div className="float-right px-5 py-3 flex">
                <button className="flex items-center text-gray-900 focus:outline-none text-1xl cursor-default font-light">
                  Watch video{" "}
                  <ArrowRight size="20" className="ml-1" strokeWidth="1.3" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-black w-full h-96 lg:transform lg:rotate-3 shadow-sm rounded-sm hover:rotate-0 transition-all ease-in-out cursor-pointer">
              Video
            </div>
          </div>
        </div>
      </section>
      <ServiceSection />
    </div>
  );
};

export default Home;
