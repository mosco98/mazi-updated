import React from 'react'
import { Menu } from 'react-feather'
import { FiShoppingBag, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'

const Navbar = ({ position }) => {
  const navClasses = position === 'absolute' ? 'absolute w-full z-10 px-4 py-2' : 'w-full px-4 py-2'
  return (
    <nav className={navClasses}>
      <div className="flex items-center justify-between">
        <Menu size="35" className="cursor-pointer menu-btn" />
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div class="flex items-center nav-links">
          {/* <a href="#collections" className="text-gray-900 font-medium mx-6">
              Collections
            </a> */}
          <Link to="/" className="text-gray-900 font-medium mx-6">
            What's new?
          </Link>
          <a href="#mission" className="text-gray-900 font-medium mx-6">
            Our mission
          </a>
          <Link to="/" className="text-white bg-gray-900 px-2 py-1 rounded font-medium mx-6">
            Pre-order
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="text-gray-900 relative">
            <FiShoppingBag className="text-gray-900" size="35" />
            <span
              className="absolute rounded-full bg-gray-900 text-white flex items-center justify-center"
              style={{ width: '20px', height: '20px', fontSize: '0.7rem', top: '-5px', right: '-8px' }}>
              10
            </span>
          </Link>

          <FiUser className="text-gray-900 ml-6 user-icon" size="35" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
