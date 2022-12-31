import React, { useState } from 'react'
import ADTop from './ADTop/ADTop'
import AppointmentDetails from './AllAppointments/AppointmentDetails'
import Appointments from './AllAppointments/Appointments'
import DoctorDetails from './Doctors/DoctorDetails'
import Doctors from './Doctors/Doctors'
import AllPatients from './Patients/AllPatients'

const AdminDashboard = () => {

  const [showAppointments, setShowAppointments] = useState(true)
  const [showDoctors, setShowDoctors] = useState(false)
  const [showPatients, setShowPatients] = useState(false)


  return (
    <>
      <ADTop
        showAppointments={showAppointments}
        setShowAppointments={setShowAppointments}
        showDoctors={showDoctors}
        setShowDoctors={setShowDoctors}
        showPatients={showPatients}
        setShowPatients={setShowPatients}
      />
      {showAppointments && <Appointments />}
      {showDoctors && <Doctors />}
      {showPatients && <AllPatients />}

      {/* Not sure if this should be here. but whenever the admin clicks on an appointment, the appointment detials should pop up. se we have to find a way to get the ID of the clicked schedule, fecth the necesassry info and pass it back to this componenet to display it to the admin who clicked it */}
      {false && <AppointmentDetails />}
      {false && <DoctorDetails />}

    </>
  )
}
export default AdminDashboard

