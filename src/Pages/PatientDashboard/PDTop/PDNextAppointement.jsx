import React from 'react'
import { NextOutlineIcon } from '../../../Assets/Icons/Icons'

const PDNextAppointement = () => {
  return (
    <div className=' w-2/3 h-24 mx-4 border border-gray-300 rounded-xl overflow-hidden flex flex-col md:flex-row '>

      <div className='w-full md:w-2/5 h-1/2 md:h-full bg-gray-100 py-2 px-4 md:py-4 text-gray-900 hidden md:flex md:flex-col justify-between md:justify-center mb-3 md:mb-0'>
        <NextOutlineIcon className=' text-2xl md:mb-2' />
        <p className='text-base'>Next Appointment</p>
      </div>

      <div className='w-full md:w-3/5 h-full'>
        <table className=' w-[90%] h-full text-left text-gray-600 mx-auto'>
          <thead className='h-1/2 border-b'>
            <tr className=''>
              <th className=''>Type</th>
              <th className=''>Date</th>
              <th className=''>Time</th>
            </tr>
          </thead>
          <tbody className='h-1/2'>
            <tr className=''>
              <td className='border-r md:border-0'>Check up</td>
              <td className='border-r md:border-0'>10-01-23</td>
              <td className=''>13:00</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default PDNextAppointement

