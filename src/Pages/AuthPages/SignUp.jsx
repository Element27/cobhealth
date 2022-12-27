import React from 'react'

const SignUp = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div className="relative mb-4">
          <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="text-white font-bold items-center bg-blue-900 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded hover:text-blue-900 text-base mt-4 md:mt-0">Sign Up
        </button>
      </div>
    </section>
  )
}

export default SignUp