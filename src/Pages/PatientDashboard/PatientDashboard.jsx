import React, { useState } from 'react'
import CreateAppointment from './CreateAppointment'
import PDTable from './PDTable/PDTable'
import PDTop from './PDTop/PDTop'

const PatientDashboard = () => {
  const [schedulePopup, setSchedulePopup] = useState(false)



  return (
    <div className='relative'>
      <PDTop setSchedulePopup={setSchedulePopup} schedulePopup={schedulePopup} />
      <PDTable />

      {/* Popup for creating new appointments */}
      {schedulePopup ?
        <div className='fixed w-screen h-full top-0 left-0 flex items-center justify-center scroll'>
          <CreateAppointment setSchedulePopup={setSchedulePopup} />
          <div className='absolute w-screen h-screen bg-black/60' onClick={() => setSchedulePopup(!schedulePopup)}></div>
        </div>
        : ""}


    </div>
  )
}

export default PatientDashboard
