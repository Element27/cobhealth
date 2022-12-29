import React from 'react'
// import { PDTopAddStyling } from '../../PatientDashboard/PDTop/PDTopStyling'
import DDNextAppointment from './DDNextAppointment'

const DDNav = () => {
  return (
    <div className='flex justify-between items-center py-8 md:p-8 '>
      {/* <div className={PDTopAddStyling}>
      <h3>3</h3>
        <p className='hidden md:block text-base'></p>
      </div> */}

      <DDNextAppointment />
    </div>
  )
}

export default DDNav