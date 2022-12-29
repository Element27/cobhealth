import React from 'react'
import PDNav from './PDNav'
import PDTopHeader from './PDTopHeader'

const PDTop = ({ setPopupState, popupState }) => {
  return (
    <div>
      <PDTopHeader />
      <PDNav setPopupState={setPopupState} popupState={popupState} />
    </div>
  )
}

export default PDTop