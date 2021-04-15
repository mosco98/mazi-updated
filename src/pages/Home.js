import React from 'react'
import { ArrowRight } from 'react-feather'

import invasionBlack from '../assets/images/invasion-black.png'
import invasionWhite from '../assets/images/invasion-white.png'
import { CollectionCard, Footer, Hero, Navbar, ServiceSection } from '../components'

const array = [invasionWhite, invasionBlack]

const Home = () => {
  return (
    <div>
      <Navbar position="absolute" />
      <Hero />
      <section id="collections" className="p-6 h-screen flex sm:flex-col items-center justify-center mb-16">
        <div className="relative w-full">
          <h1 className="text-gray-900 font-bold text-7xl opacity-40 absolute z-0 transform rotate-1">Collections</h1>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-8 w-3/5 mx-auto">
            {array.map((image, i) => (
              <CollectionCard key={i} image={image} />
            ))}
          </div>
        </div>
      </section>
      <section id="mission" className="px-6 py-20 flex items-center justify-center">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full">
          <div className="my-4">
            <h1 className="text-gray-900 font-bold text-7xl opacity-40">Our Mission</h1>
            <div className="my-3 p-2">
              <p className="text-2xl">
                We are spreading the gospel of the rich African culture and history through fashion.
              </p>
              <div className="float-right px-5 py-3 flex">
                <h2 className="text-2xl mr-5">Why?</h2>
                <button className="flex items-center text-gray-900 focus:outline-none text-1xl cursor-default">
                  Watch video <ArrowRight size="20" className="ml-1" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-black w-full h-96 transform rotate-3 shadow-sm rounded-sm hover:rotate-0 transition-all ease-in-out cursor-pointer">
              Video
            </div>
          </div>
        </div>
      </section>
      <ServiceSection />
      <Footer />
    </div>
  )
}

export default Home
