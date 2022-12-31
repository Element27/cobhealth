import React from 'react'
import { primaryButtonStyling, textareaStyling } from '../../../tailwindStyling'

const PatientAppointmentDetails = () => {
  return (
    <div className="text-gray-600 body-font w-full md:w-3/4  flex items-center justify-center z-10">
      <div className="relative rounded-lg m-4 p-8 flex flex-col bg-gray-100  w-full mt-10 md:mt-0">

        <table className="table-auto w-full text-left font-semibold whitespace-no-wrap mb-4 border border-gray-300 rounded-2xl">
          <tbody>
            <tr className='border-b border-gray-300'>
              <td className="px-2 py-1">Date</td>
              <td className="px-2 py-1">12/12/22</td>
            </tr>
            <tr className='border-b border-gray-300'>
              <td className="px-2 py-1">Time</td>
              <td className="px-2 py-1">2:00 PM</td>
            </tr>
            <tr className='border-b border-gray-300'>
              <td className="px-2 py-1">Patient's Name</td>
              <td className="px-2 py-1">John Paul</td>
            </tr>
            <tr className='border-b border-gray-300'>
              <td className="px-2 py-1">Type</td>
              <td className="px-2 py-1">Check Up</td>
            </tr>
          </tbody>
          <tr className='border-b border-gray-300'>
            <td className="px-2 py-1">Status</td>
            <td className="px-2 py-1">completed</td>
          </tr>
        </table>
        <div className="mb-4">
          <h3>Doctor's Report</h3>
          <p className={textareaStyling}>
            This is the doctor's report after the examination was completed. patient's vitals is supposed to go here, as well as other details of the report like medication, lifestyle changes, reschedule, etc.
          </p>
        </div>

        <button /*onClick={() => setEditPopup(false)} */ className={primaryButtonStyling}>Okay</button>
      </div>
    </div>
  )
}

export default PatientAppointmentDetails