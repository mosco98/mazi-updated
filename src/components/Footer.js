import React from 'react'
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookSquare,
  FaInstagramSquare,
  FaSnapchatSquare,
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="p-6 flex flex-col mt-16 relative">
      <h1
        className="text-gray-900 font-bold text-7xl opacity-10 absolute z-0 transform rotate-1"
        style={{ left: '50%', marginLeft: '-50px', marginTop: '-50px', top: '50%' }}>
        Made in Lagos
      </h1>
      <form className="self-end z-10">
        <h1 className="text-2xl font-bold text-gray-900">Join our mailing list</h1>
        <small className="opacity-90">Be the first to get updates on our products</small>
        <div className="my-2 flex items-center">
          <input
            className="py-2 px-2 w-72 bg-transparent border-gray-900 border-b border-opacity-60 outline-none mx-1"
            type="email"
            placeholder="Email address"
          />
          <button className="text-sm bg-gray-900 text-white px-3 py-2">SUBSCRIBE</button>
        </div>
      </form>
      <div className="flex items-center justify-between my-10">
        <div className="flex items-center space-x-3">
          <a href="#" title="Instagram">
            <FaInstagramSquare size="23" />
          </a>
          <a href="#" title="Twitter">
            <FaTwitterSquare size="23" />
          </a>
          <a href="#" title="Facebook">
            <FaFacebookSquare size="23" />
          </a>
          <a href="#" title="Snapchat">
            <FaSnapchatSquare size="23" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaCcMastercard size="30" />
          <FaCcVisa size="30" />
          <FaCcPaypal size="30" />
        </div>
      </div>
      <div className="self-end text-sm my-4">
        <a className="opacity-50 text-gray-900 ml-5" href="#">
          Contact us
        </a>
        <a className="opacity-50 text-gray-900 ml-5" href="#">
          Terms & condition
        </a>
        <a className="opacity-50 text-gray-900 ml-5" href="#">
          Privacy policy
        </a>
      </div>
      <span>© 2021, Mazi wears</span>
    </footer>
  )
}

export default Footer
