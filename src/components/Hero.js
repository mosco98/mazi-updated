import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { ArrowDown } from 'react-feather'

import invasionArt from '../assets/images/invasion-art.png'

const Hero = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 }
  }
  return (
    <AnimatePresence>
      <div className="hero h-screen w-screen relative flex items-center justify-center">
        <div className="flex lg:flex-row sm:flex-col items-center justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
            src={invasionArt}
            alt="fashion"
          />
          <div className="space-y-6">
            <div className="text-center space-y-3 hero-text">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.5 }}
                className="text-gray-900 text-7xl font-extrabold">
                We are africans✊🏿
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.5 }}
                className="text-gray-900 text-7xl font-extrabold">
                For the culture✊🏿
              </motion.h1>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 }}
                className="opacity-90"
                style={{ fontSize: '1.2rem' }}>
                Put <span className="font-extrabold italic">Africa</span> on the map while looking peng
              </motion.span>
            </div>
            <motion.a
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ delay: 5.5 }}
              href="#collections">
              <button className="flex items-center text-gray-900 px-5 py-3 hover:opacity-80 transition-all ease-in-out focus:outline-none text-1xl float-right">
                See collections <ArrowDown size="20" className="ml-1" />
              </button>
            </motion.a>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Hero
