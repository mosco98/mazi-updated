import React from 'react'
import { ArrowRight } from 'react-feather'
import { Link } from 'react-router-dom'

import { Footer, Navbar, ServiceSection } from '../components'

const Product = () => {
  return (
    <div>
      <Navbar position="relative" />
      <section className="py-6 mt-6">
        <div className="grid grid-cols-2">
          <div className="flex items-center lg:justify-end sm:justify-center p-3">
            <div className="bg-gray-100" style={{ height: '28rem', minWidth: '300px' }}>
              Image
            </div>
          </div>
          <div className="p-3">
            <h1 className="text-4xl font-medium mb-2">INVASION 1867</h1>
            <span className="text-2xl">₦10,000</span>
            <p className="italic opacity-80 mt-14">
              Learn what inspired us to make this masterpiece{' '}
              <Link to="/inspiration" className="underline cursor-pointer hover:opacity-70 transition-all ease-in-out">
                here
              </Link>
            </p>
            <button className="bg-gray-900 px-3 py-2 text-white mt-8 focus:outline-none hover:opacity-90 transition-all ease-in-out">
              ADD TO CART
            </button>
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
