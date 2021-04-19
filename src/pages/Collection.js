import React from 'react'
import { ArrowRight } from 'react-feather'

import { ProductCard, ServiceSection } from '../components'
import { collections } from '../utils/api'

const Collection = ({ match }) => {
  const {
    params: { collectionId }
  } = match

  const collection = collections.find((collection) => collection.id === collectionId)
  const products = collection.products
  return (
    <>
      <section className="py-6 mt-32 px-5">
        <h1 className="text-5xl font-bold text-gray-900 uppercase text-center">{collection.name}</h1>
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto px-5 mt-12"
          style={{ width: '80%', minWidth: '300px' }}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} collectionId={collectionId} />
          ))}
        </div>
      </section>
      <div className="flex items-center justify-center mb-10">
        <button className="text-gray-900 px-5 py-3 hover:opacity-80 transition-all ease-in-out focus:outline-none text-1xl">
          <a href="/#collections" className="flex items-center">
            See more collections <ArrowRight size="20" className="ml-1" strokeWidth="1.3" />
          </a>
        </button>
      </div>
      <ServiceSection />
    </>
  )
}

export default Collection
