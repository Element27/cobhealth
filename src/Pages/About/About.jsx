import React from 'react'
import { Link } from 'react-router-dom'
import { HOME } from '../../routes'
import { primaryButtonStyling } from '../../tailwindStyling'

const About = () => {
  return (
    <div class="bg-gray-100 h-screen justify-center">
      <center class="pt-24 m-auto">
        <p className='text-6xl'>🚧</p>
        <div class=" tracking-widest mt-4">
          <span class="text-gray-500 text-6xl block"><span>Under Construction</span></span>
          <span class="text-gray-500 text-xl">We Are Building Something Healthy</span>

        </div>
      </center>
      <center class="mt-6">
        <Link to={HOME} className={primaryButtonStyling}>Back Home</Link>
      </center>
    </div>
  )
}

export default About