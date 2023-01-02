import React from 'react'
import NavBar from '../LangingPage/NavBar'


const About = () => {
  return (
    <section className=" mx-auto body-font w-screen h-screen">
      <NavBar />
      <div className='container mx-auto px-6'>
        <h1 className='text-xl md:text-2xl font-bold w-full border-b-gray-900 border-b'>About CobHealth</h1>
        {/*  */}
        <p className='text-gray-700 my-4'><span className='text-blue-900 font-semibold'>CobHealth</span> is a web solution for a hospital that allows the patients to schedule and track non-emergency appointments like check ups, while allowing the hospital to easily manage patients personal, and appointment records.</p>

        <h3 className='font-bold text-lg md:text-xl '>How The Idea Came About</h3>
        <p className='text-gray-700 my-4'>
          Last year October, I tagged along to one of the state hospital in Nigeria. The hospital reception was crowded with people waiting for their turn to submit their hospital card for the receptionist to fetch their file. While there, I observed that people would drop their card with her and when she felt like she'd gathered enough cards, she would disappear into the room behind her to fetch the files. Sometimes, she would just leave her desk all together, go for a minute or two, return and proceed with the card collection. I also observed during my brief one hour or so that I was there that a colleague was always with her, either to gist or to fast track another patient's file.
        </p>
        <p className='text-gray-700 my-4'>
          I was not so pleased at the sight. It is not an efficient practice to store large amount of data like this. The risk of losing or mixing up patients data is high on the hospital's side while on the patients side, what happens if you lose your card?
        </p>

        <h3 className='font-bold text-lg md:text-xl '>What Has Been Done So Far</h3>
        <p className='text-gray-700 my-4'>
          So far, 20 fully responsive screens have been developed including landing page, sign in and sign up, patients dashbaord, doctors dashbaord, admin dashboard etc. Screens might be added or removed as time goes on.
        </p>

        <h3 className='font-bold text-lg md:text-xl '>What Next</h3>
        <p className='text-gray-700 my-4'>
          There are two major task at hand, namely:
          <ul className="list-inside list-disc ">
            <li>Super Admin Dashboard</li>
            <li>Developing the backend</li>
            <li>Integrating the backend</li>
          </ul>
        </p>
      </div>

    </section>
  )
}

export default About
