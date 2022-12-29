import React from 'react'
import { AddOutlineIcon } from '../../../Assets/Icons/Icons'
import PDNextAppointement from './PDNextAppointement'
import { PDTopAddStyling } from './PDTopStyling'

const PDNav = ({ setPopupState, popupState }) => {
  return (
    <div className='flex justify-between items-center py-8 md:p-8 '>
      <PDNextAppointement />

      <div className={PDTopAddStyling} onClick={() => setPopupState(!popupState)}>
        <AddOutlineIcon className=' text-2xl mb-2' />
        <p className='hidden md:block text-base'>Set Appointment</p>
      </div>

    </div>
  )
}

export default PDNav