import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { ServiceSection } from '../components'
import { collections } from '../utils/api'
import { useCart } from '../utils/contexts/CartContext'

const Product = ({ match }) => {
  const sizeRef = useRef()
  const {
    params: { collectionId, productId }
  } = match

  const collection = collections.find((collection) => collection.id === collectionId)
  const products = collection.products
  const product = products.find((product) => product.id === productId)

  const { cartItems, AddItemToCartHandler, RemoveFromCartHandler } = useCart()

  const exists = cartItems.find((cartItem) => cartItem.id === product.id)

  return (
    <>
      <section className="py-6 mt-32 product-section">
        <div className="flex items-center p-3">
          <div
            className="bg-gray-100 shadow-sm lg:m-0 md:m-0 sm:mx-auto"
            style={{ height: '28rem', minWidth: '300px' }}>
            <img className="h-full mx-auto" src={product.images[0].src} alt="invasion-white" />
          </div>
        </div>
        <div className="p-3 flex flex-col lg:w-96 md:w-full sm:w-full lg:m-0 md:m-0 sm:mx-auto">
          <h1 className="text-4xl font-bold mb-2 uppercase">{product.name}</h1>
          <span className="text-2xl opacity-80 font-medium">₦{parseFloat(product.price).toLocaleString('en')}</span>
          <div className={exists ? 'w-full flex-col my-4 opacity-0 visible-hidden' : 'w-full flex flex-col my-4'}>
            <span className="text-sm opacity-90">Size</span>
            <select
              className="py-2 border border-gray-900 border-opacity-30 mt-1 cursor-pointer focus:outline-none"
              ref={sizeRef}>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
          {exists ? (
            <button
              className="bg-gray-900 px-3 py-2 text-white mt-8 focus:outline-none hover:opacity-90 transition-all ease-in-out select-none"
              onClick={() => RemoveFromCartHandler(product)}>
              REMOVE FROM CART
            </button>
          ) : (
            <button
              className="bg-gray-900 px-3 py-2 text-white mt-8 focus:outline-none hover:opacity-90 transition-all ease-in-out"
              onClick={() => AddItemToCartHandler(product, collectionId, sizeRef.current.value)}>
              ADD TO CART
            </button>
          )}
          <p className="italic opacity-80 mt-14">
            Learn what inspired us to make this masterpiece{' '}
            <Link
              to={`/inspiration/${collection.inspiration.id}`}
              className="underline cursor-pointer hover:opacity-70 transition-all ease-in-out">
              here
            </Link>
          </p>
        </div>

        {/* <button className="mx-auto mt-10 flex items-center focus:outline-none">
          More products <ArrowRight className="ml-1" size="20" />
        </button> */}
      </section>
      <ServiceSection />
    </>
  )
}

export default Product
