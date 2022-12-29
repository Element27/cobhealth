import React, { useState } from 'react'
import CreateAppointment from './CreateAppointment'
import PDTable from './PDTable/PDTable'
import PDTop from './PDTop/PDTop'

const PatientDashboard = () => {
  const [popupState, setPopupState] = useState(false)

  return (
    <div className='relative'>
      <PDTop setPopupState={setPopupState} popupState={popupState} />
      <PDTable />

      {popupState ?
        <div className='fixed w-screen h-full top-0 left-0 flex items-center justify-center scroll'>
          <CreateAppointment />
          <div className='absolute w-screen h-screen bg-black/60' onClick={() => setPopupState(!popupState)}></div>
        </div>
        : ""}
    </div>
  )
}

export default PatientDashboard
