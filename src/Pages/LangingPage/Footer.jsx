import React from 'react'
import { NavLink } from 'react-router-dom'
import smlogo from '../../cobhealth-logo.png'

const Footer = () => {
  return (
    <footer className="text-white body-font bg-blue-900 min-h-fit">

      <div className="container px-5 py-8 mx-auto grid md:flex items-center justify-center md:justify-between">

        <NavLink className="flex title-font font-medium items-center justify-center text-gray-900">
          <div className='flex items-center'>
            <img src={smlogo} alt='md logo' className='h-14' />
            <p className='ml-1 font-bold hidden md:block text-white'>
              CobHealth
            </p>
          </div>
        </NavLink>

        <div className='grid md:flex items-center justify-center md:justify-between'>

          <nav className="text-base  text-center grid md:flex justify-center items-center mx-auto">
            <NavLink className="mx-4  hover:text-gray-900 font-bold mb-4 md:mb-auto">Home</NavLink>
            <NavLink className="mx-4  hover:text-gray-900 font-bold mb-4 md:mb-auto">About</NavLink>
            <NavLink className="mx-4  hover:text-gray-900 font-bold mb-4 md:mb-auto">Contact</NavLink>
          </nav>

          <button className="text-blue-900 font-bold items-center bg-gray-100 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0  md:mx-8">Sign In</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
