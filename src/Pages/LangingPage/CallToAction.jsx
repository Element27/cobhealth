import React from 'react'

const CallToAction = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto text-center">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center  mx-auto justify-center">
          <h1 className="flex-grow sm:pr-16 text-2xl font-bold title-font  text-[#0f6198]">Be A Part Of Our Family.</h1>
          <button className="text-white font-bold items-center bg-blue-900 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded hover:text-blue-900 text-base mt-4 md:mt-0">Sign In
          </button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction