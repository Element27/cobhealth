import React from 'react'
import { NavLink } from 'react-router-dom'
import { ADMIN, DASHBOARD, DOCTOR } from '../../routes'
import { primaryButtonStyling } from '../../tailwindStyling'

const ToDashboard = () => {
  return (
    <section className=" body-font bg-gray-100 h-screen w-screen flex items-center justify-center">


      <div className="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
        <h3 className='font-semibold text-sm italic'>This is a temporary page created to allow quick access to the dashboards while the backend is still being worked on...</h3>

        <NavLink to={DASHBOARD} className={primaryButtonStyling}>
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Patient Dashboard</h2>
        </NavLink>
        <NavLink to={DOCTOR} className={primaryButtonStyling}>
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Doctor Dashboard</h2>
        </NavLink>
        <NavLink to={ADMIN} className={primaryButtonStyling}>
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Admin Dashboard</h2>
        </NavLink>

      </div>

    </section>
  )
}

export default ToDashboard