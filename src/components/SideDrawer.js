import React from 'react'
import { X } from 'react-feather'

const SideDrawer = ({ sideDrawerHandler }) => {
  return (
    <div className="side-drawer p-6">
      <X size="35" className="cursor-pointer text-gray-900" onClick={sideDrawerHandler} />
    </div>
  )
}

export default SideDrawer
