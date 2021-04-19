import React from 'react'
import { Link } from 'react-router-dom'

const CollectionCard = ({ image, name, id }) => {
  return (
    <Link to={`/collections/${id}`} style={{ height: '28rem', minWidth: '250px' }}>
      <div className="h-full relative bg-gray-200">
        <img className="h-full mx-auto" src={image} alt="card" />
        <div className="over-lay absolute bg-black top-0 w-full h-full cursor-pointer opacity-0 hover:opacity-80 transition-all ease-in-out duration-200 flex items-center justify-center">
          <h1 className="z-20 text-white text-3xl font-extrabold text-center uppercase">{name}</h1>
        </div>
      </div>
    </Link>
  )
}

export default CollectionCard
