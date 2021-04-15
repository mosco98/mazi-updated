import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FiShoppingBag, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'

const Navbar = ({ position }) => {
  const navClasses =
    position === 'absolute' ? 'px-6 py-3 absolute w-full z-10 bg-transparent' : 'px-6 py-3 w-full bg-transparent'
  return (
    <AnimatePresence>
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }} className={navClasses}>
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div class="flex items-center">
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
            <Link to="/cart" className="text-gray-900 font-medium relative">
              <FiShoppingBag className="text-gray-900" size="30" />
              <span
                className="absolute rounded-full bg-gray-900 text-white flex items-center justify-center"
                style={{ width: '20px', height: '20px', fontSize: '0.7rem', top: '-5px', right: '-8px' }}>
                10
              </span>
            </Link>
            <Link to="/" className="text-gray-900 font-medium ml-6">
              <FiUser className="text-gray-900" size="30" />
            </Link>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  )
}

export default Navbar
