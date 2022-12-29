import React from 'react'
import { NextOutlineIcon } from '../../../Assets/Icons/Icons'
import { PDTopNextStyling } from '../../PatientDashboard/PDTop/PDTopStyling'

const DDNextAppointment = () => {
  return (
    <div className=' w-2/3 h-24 mx-4 border border-gray-300 rounded-xl overflow-hidden flex flex-col md:flex-row '>

      <div className={PDTopNextStyling}>
        <NextOutlineIcon className=' text-2xl md:mb-2' />
        <p className='text-base'>Next Appointment</p>
      </div>

      <div className='w-full md:w-3/5 h-full'>
        <table className=' w-[90%] h-full text-left text-gray-600 mx-auto'>
          <thead className='h-1/2 border-b'>
            <tr className=''>
              <th className=''>Type</th>
              <th className=''>Time</th>
              <th className=''>Patient's Name</th>
            </tr>
          </thead>
          <tbody className='h-1/2'>
            <tr className=''>
              <td className='border-r md:border-0'>Check up</td>
              <td className=''>13:00</td>
              <td className='border-r md:border-0'>Paul John</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default DDNextAppointment