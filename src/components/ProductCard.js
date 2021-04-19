import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, name, price, images, collectionId }) => {
  return (
    <div className="p-3" style={{ height: '28rem', minWidth: '200px' }}>
      <div className="h-full">
        <div className="h-4/5 bg-gray-100">
          <img className="h-full mx-auto" src={images[0].src} alt="product" />
        </div>
        <div className="h-1/5 p-2">
          <Link to={`${collectionId}/${id}`}>
            <h6 className="text-2xl text-gray-900 font-bold uppercase hover:opacity-80 transition-all ease-in-out">
              {name}
            </h6>
          </Link>
          <p className="font-medium opacity-80">₦{parseFloat(price).toLocaleString('en')}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
