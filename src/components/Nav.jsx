import React from 'react'
import {NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="w-full bg-white p-5 rounded-[20px] flex gap-10">
          <NavLink to='/' className={(e) => e.isActive ? "text-2xl" : ""} >Home</NavLink>
          <NavLink to='/create' className={(e) => e.isActive ? "text-2xl" : ""}>Create</NavLink>
          <NavLink to='/show' className={(e) => e.isActive ? "text-2xl" : ""}>Show</NavLink>
        </nav>
  )
}

export default Nav