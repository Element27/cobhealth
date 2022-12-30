import React from 'react'
import { DoctorIcon, ScheduleIcon, UserIcon } from '../../../Assets/Icons/Icons'
import { PDTopAddStyling } from '../../PatientDashboard/PDTop/PDTopStyling'

const ADNav = () => {
  return (
    <div className='flex justify-between items-center py-8 md:p-8 '>

      {/* All appointment */}
      <div className={PDTopAddStyling} >
        <ScheduleIcon className=' text-2xl mb-2' />
        <p className='hidden md:block text-base'>All Appointments</p>
      </div>

      <div className={PDTopAddStyling} >
        <DoctorIcon className=' text-2xl mb-2' />
        <p className='hidden md:block text-base'>All Doctors</p>
      </div>

      <div className={PDTopAddStyling} >
        <UserIcon className=' text-2xl mb-2' />
        <p className='hidden md:block text-base'>All Patients</p>
      </div>
    </div>
  )
}

export default ADNav