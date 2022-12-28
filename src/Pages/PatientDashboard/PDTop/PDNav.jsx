import React from 'react'
import { AddOutlineIcon } from '../../../Assets/Icons/Icons'
import PDNextAppointement from './PDNextAppointement'

const PDNav = () => {
  return (
    <div className='flex justify-between items-center py-8 md:p-8 '>
      <PDNextAppointement />

      <div className='text-blue-900 w-1/3 h-24 mx-4 border border-gray-300 flex flex-col py-5 px-6 rounded-xl items-center justify-center'>
        <AddOutlineIcon className=' text-2xl mb-2' />
        <p className='hidden md:block text-base'>Set Appointment</p>
      </div>

    </div>
  )
}

export default PDNav