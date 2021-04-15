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
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex flex-col mt-20 relative px-6">
      <h1 className="text-gray-900 font-bold text-5xl opacity-10 absolute z-0 transform rotate-1 " style={{}}>
        Made in Lagos
      </h1>
      <form className="lg:self-end z-10 sm:self-center flex flex-col items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Join our mailing list</h1>
          <small className="opacity-90">Be the first to get updates on our products</small>
          <div className="my-2 flex items-center">
            <input
              className="py-2 w-56 bg-transparent border-gray-900 border-b border-opacity-60 outline-none mx-1"
              type="email"
              placeholder="Email address"
            />
            <button className="text-sm bg-gray-900 text-white px-3 py-2">SUBSCRIBE</button>
          </div>
        </div>
      </form>
      <div className="flex lg:flex-row flex-col items-center justify-between my-10">
        <div className="flex items-center space-x-3 my-2">
          <Link to="/" title="Instagram">
            <FaInstagramSquare size="23" />
          </Link>
          <Link to="/" title="Twitter">
            <FaTwitterSquare size="23" />
          </Link>
          <Link to="/" title="Facebook">
            <FaFacebookSquare size="23" />
          </Link>
          <Link to="/" title="Snapchat">
            <FaSnapchatSquare size="23" />
          </Link>
        </div>
        <div className="flex items-center space-x-3 my-2">
          <FaCcMastercard size="30" />
          <FaCcVisa size="30" />
          <FaCcPaypal size="30" />
        </div>
      </div>
      <div className="lg:self-end sm:self-center text-sm my-4 flex items-center text-center">
        <Link to="/" className="opacity-50 text-gray-900 ml-5" href="#">
          Contact us
        </Link>
        <Link to="/" className="opacity-50 text-gray-900 ml-5" href="#">
          Terms & condition
        </Link>
        <Link to="/" className="opacity-50 text-gray-900 ml-5" href="#">
          Privacy policy
        </Link>
      </div>
      <span className="my-4 opacity-70">© 2021, Mazi wears</span>
    </footer>
  )
}

export default Footer
