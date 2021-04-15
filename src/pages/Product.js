import React from 'react'
import { ArrowRight } from 'react-feather'
import { Link } from 'react-router-dom'

import invasionWhite from '../assets/images/invasion-white.png'
import { Footer, Navbar, ServiceSection } from '../components'

const Product = () => {
  return (
    <div>
      <Navbar position="relative" />
      <section className="py-6 mt-6">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="flex items-center lg:justify-end p-3">
            <div className="bg-gray-100 shadow-sm mx-auto lg:m-0" style={{ height: '28rem', minWidth: '300px' }}>
              <img className="h-full mx-auto" src={invasionWhite} alt="invasion-white" />
            </div>
          </div>
          <div className="p-3 flex flex-col lg:w-2/4">
            <h1 className="text-4xl font-bold mb-2">INVASION 1867</h1>
            <span className="text-2xl">₦10,000</span>
            <div className="w-full flex flex-col my-3">
              <span className="text-sm opacity-90">Size</span>
              <select className="py-2 border border-gray-900 border-opacity-30 mt-1 cursor-pointer focus:outline-none">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
            <button className="bg-gray-900 px-3 py-2 text-white mt-8 focus:outline-none hover:opacity-90 transition-all ease-in-out">
              ADD TO CART
            </button>
            <p className="italic opacity-80 mt-14">
              Learn what inspired us to make this masterpiece{' '}
              <Link to="/inspiration" className="underline cursor-pointer hover:opacity-70 transition-all ease-in-out">
                here
              </Link>
            </p>
          </div>
        </div>
        <button className="mx-auto mt-10 flex items-center focus:outline-none">
          More products <ArrowRight className="ml-1" size="20" />
        </button>
      </section>
      <ServiceSection />
      <Footer />
    </div>
  )
}

export default Product
