import React from 'react'
import DoctorDetails from './DoctorDetails'
import DoctorsTable from './DoctorsTable'

const Doctors = () => {
  return (
    <div>
      <DoctorsTable />
      {false && <DoctorDetails />}
    </div>
  )
}

export default Doctors