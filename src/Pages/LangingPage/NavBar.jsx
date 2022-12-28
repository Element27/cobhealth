import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MenuIcon, CloseIcon } from '../../Assets/Icons/Icons'
// import logo from '../../cobhealth.png'
import smlogo from '../../cobhealth-logo.png'

const NavBar = () => {

  const [menuState, setMenuState] = useState(false);

  // const smShowMenu = "" 0f6198
  return (
    <div className="mx-auto p-5 flex items-center justify-between flex-wrap bg-white/40">

      <div className='container flex justify-between w-full md:w-auto items-center'>
        <NavLink
          to="/"
          className="title-font font-medium flex items-center mb-4 md:mb-0">
          <div className='flex items-center'>
            <img src={smlogo} alt='md logo' className='h-14' />
            <p className='ml-1 font-bold hidden md:block text-[#0f6198]'>
              CobHealth
            </p>
          </div>
        </NavLink>
        <div className='md:hidden' onClick={() => setMenuState(!menuState)}>
          {menuState ? <CloseIcon className="text-2xl text-white" /> : <MenuIcon className="text-2xl text-white" />}
        </div>
      </div>

      {/* Small Screen */}

      {menuState ?
        <div className=' md:hidden grid w-full text-center'>

          <nav className="text-base grid justify-center w-full font-bold text-white">
            <NavLink to="/" className="mb-4 hover:border-b-2 w-full font-bold ">Home</NavLink>
            <NavLink to="/about" className="mb-4 hover:border-b-2 w-full font-bold ">About</NavLink>
            <NavLink to="/contact" className="mb-4 hover:border-b-2 w-full font-bold ">Contact</NavLink>
          </nav>

          <button className="text-white font-bold items-center bg-blue-900 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded hover:text-blue-900 text-base mt-4 md:mt-0">Sign In
          </button>
        </div>
        : ""}
      {/* Large screen */}
      <div className='hidden md:flex items-center justify-center'>

        <nav className="text-base justify-center flex">
          <NavLink to="/" className="mr-5 text-white font-bold">Home</NavLink>
          <NavLink to="/about" className="mr-5 text-white font-bold">About</NavLink>
          <NavLink to="/contact" className="mr-5 text-white font-bold">Contact</NavLink>
        </nav>

        <Link to='/signin' className="text-white font-bold items-center bg-blue-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded hover:text-blue-900 text-base mt-4 md:mt-0">Sign In
        </Link>
      </div>

    </div>
  )
}

export default NavBar