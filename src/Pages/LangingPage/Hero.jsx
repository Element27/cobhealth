import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Hero = () => {
  const bannerHeader = "Doctor's Appointment With Ease"
  const bannerText = `Schedule an appointment with our in house doctors with from the ease of your cell phone. Come in knowing that the doc is expecting you and will see you at the time slated for you. Our doctors are professional and friendly and will be happy to see you.`
  return (
    <section className=" mx-auto text-gray-400 body-font w-screen h-screen bg-hero-bg bg-cover bg-center">
      <div className=" w-full h-full  bg-black/80">
        <NavBar />
        <div className='container mx-auto flex h-full items-center justify-center flex-col px-6'>

          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold  text-[#0f6198] ">{bannerHeader}</h1>
            <p className="mb-8 leading-relaxed">{bannerText}</p>
            <div className="grid md:flex justify-evenly md:justify-center">
              <Link to='signup' className="text-white font-bold items-center bg-blue-900 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded hover:text-blue-900 text-base mt-4 md:mt-0 md:mx-8">Sign Up
              </Link>
              <Link to='signin' className="text-blue-900 font-bold items-center bg-gray-100 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0  md:mx-8">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero