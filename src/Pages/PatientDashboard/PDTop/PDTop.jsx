import React from 'react'
import PDNav from './PDNav'
import PDTopHeader from './PDTopHeader'

const PDTop = ({ setSchedulePopup, schedulePopup, editPopup, setEditPopup }) => {
  return (
    <>
      <PDTopHeader editPopup={editPopup} setEditPopup={setEditPopup} />
      <PDNav setSchedulePopup={setSchedulePopup} schedulePopup={schedulePopup} editPopup={editPopup} setEditPopup={setEditPopup} />
    </>
  )
}

export default PDTop