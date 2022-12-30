import React from 'react'
import ADTop from './ADTop/ADTop'
import AppointmentDetails from './AllAppointments/AppointmentDetails'
import AppointmentsTable from './AllAppointments/AppointmentsTable'
import DoctorsTable from './Doctors/DoctorsTable'

const AdminDashboard = () => {
  return (
    <>
      <ADTop />
      <AppointmentsTable />
      <DoctorsTable />

      {/* Not sure if this should be here. but whenever the admin clicks on an appointment, the appointment detials should pop up. se we have to find a way to get the ID of the clicked schedule, fecth the necesassry info and pass it back to this componenet to display it to the admin who clicked it */}
      {false && <AppointmentDetails />}

    </>
  )
}
export default AdminDashboard

