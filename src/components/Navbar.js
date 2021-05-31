import React from "react";
import { Menu } from "react-feather";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";
import { useCart } from "../utils/contexts/CartContext";

const Navbar = ({ sideDrawerHandler }) => {
  const { cartItems } = useCart();
  return (
    <nav className="absolute w-full z-10 px-4 py-2 top-0 bg-transparent">
      <div className="flex items-center justify-between">
        <Menu
          size="35"
          className="cursor-pointer menu-btn"
          onClick={sideDrawerHandler}
        />
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div class="flex items-center nav-links">
          <a href="/#collections" className="text-gray-900 font-medium mx-6">
            Collections
          </a>
          <a href="/#mission" className="text-gray-900 font-medium mx-6">
            Our mission
          </a>
          <Link
            to="/"
            className="text-white bg-gray-800 px-2 py-1 rounded font-medium mx-6"
          >
            Pre-order
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="text-gray-900 relative">
            <FiShoppingBag
              className="text-gray-900"
              size="35"
              strokeWidth="1.3"
            />
            {cartItems.length > 0 && (
              <span
                className="absolute rounded-full bg-gray-800 text-white flex items-center justify-center"
                style={{
                  width: "20px",
                  height: "20px",
                  fontSize: "0.7rem",
                  top: "-5px",
                  right: "-8px"
                }}
              >
                {cartItems.length}
              </span>
            )}
          </Link>

          <FiUser
            className="text-gray-900 ml-6 user-icon"
            size="35"
            strokeWidth="1.3"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
