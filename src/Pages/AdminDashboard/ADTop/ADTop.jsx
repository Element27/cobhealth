import React from 'react'
import ADHeader from './ADHeader'
import ADNav from './ADNav'

const ADTop = ({ showAppointments,
  setShowAppointments,
  showDoctors,
  setShowDoctors,
  showPatients,
  setShowPatients }) => {
  return (
    <>
      <ADHeader
      />
      <ADNav
        showAppointments={showAppointments}
        showDoctors={showDoctors}
        showPatients={showPatients}
        setShowAppointments={setShowAppointments}
        setShowDoctors={setShowDoctors}
        setShowPatients={setShowPatients}
      />
    </>
  )
}

export default ADTop