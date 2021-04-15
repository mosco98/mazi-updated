import React from 'react'

const CollectionCard = ({ image }) => {
  return (
    <div className="p-3" style={{ height: '28rem', minWidth: '200px' }}>
      <div className="h-full relative bg-gray-200 shadow-sm">
        <img className="h-full mx-auto" src={image} alt="card" />
        <div className="over-lay absolute bg-black top-0 w-full h-full cursor-pointer opacity-0 hover:opacity-60 transition-all ease-in-out duration-200 flex items-center justify-center">
          <h1 className="z-10 text-white text-3xl font-extrabold">INVASION 1867</h1>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
