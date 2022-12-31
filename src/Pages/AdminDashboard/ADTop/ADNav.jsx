import React from 'react'
import { NavLink } from 'react-router-dom'
import { DoctorIcon, ScheduleIcon, UserIcon } from '../../../Assets/Icons/Icons'
import { PDTopAddActiveStyling, PDTopAddStyling } from '../../PatientDashboard/PDTop/PDTopStyling'

const ADNav = ({ showAppointments, setShowAppointments, showDoctors, setShowDoctors, showPatients, setShowPatients }) => {

  const funcShowApp = () => {
    setShowAppointments(true)
    setShowDoctors(false)
    setShowPatients(false)
  }
  const funcShowDoc = () => {
    setShowAppointments(false)
    setShowDoctors(true)
    setShowPatients(false)
  }
  const funcShowPat = () => {
    setShowAppointments(false)
    setShowDoctors(false)
    setShowPatients(true)
  }


  return (
    <div className='flex justify-between items-center py-8 md:p-8 '>

      {/* All appointment */}
      <NavLink className={showAppointments ? PDTopAddActiveStyling : PDTopAddStyling} onClick={funcShowApp} >
        <ScheduleIcon className=' text-2xl mb-2' />
        <p className='hidden md:block text-base'>All Appointments</p>
      </NavLink>

      <div className={showDoctors ? PDTopAddActiveStyling : PDTopAddStyling} onClick={funcShowDoc}>
        <DoctorIcon className=' text-2xl mb-2' />
        <p className='hidden md:block text-base'>All Doctors</p>
      </div>

      <div className={showPatients ? PDTopAddActiveStyling : PDTopAddStyling} onClick={funcShowPat} >
        <UserIcon className=' text-2xl mb-2' />
        <p className='hidden md:block text-base'>All Patients</p>
      </div>
    </div>
  )
}

export default ADNav