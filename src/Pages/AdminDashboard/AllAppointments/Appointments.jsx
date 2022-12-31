import React from 'react'
import AppointmentDetails from './AppointmentDetails'
import AppointmentsTable from './AppointmentsTable'

const Appointments = () => {
  return (
    <div>
      <AppointmentsTable />
      {false && <AppointmentDetails />}
    </div>
  )
}

export default Appointments