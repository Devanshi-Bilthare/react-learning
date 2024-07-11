import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="w-full bg-white p-5 rounded-[20px] flex gap-10">
          <Link to='/' >Home</Link>
          <Link to='/create' >Create</Link>
          <Link to='/show' >Show</Link>
        </nav>
  )
}

export default Nav