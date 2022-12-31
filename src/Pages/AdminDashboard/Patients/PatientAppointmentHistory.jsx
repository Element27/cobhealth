import React from 'react'
import PatientAppointmentHistoryRow from './PatientAppointmentHistoryRow'

const PatientAppointmentHistory = () => {
  return (
    <section className="text-gray-600 body-font mt-8">

      <div className="container px-5 py-2 mx-auto">
        <div className='w-full mb-8'>

          <h3 className='text-xl md:text-2xl text-gray-900 '>Patient's Appoinment History</h3>
        </div>
        {/* <div className="lg:w-5/6 w-full mx-auto overflow-auto"> */}
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Type</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Doctor</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Status</th>
            </tr>
          </thead>
          <tbody>
            <PatientAppointmentHistoryRow />

          </tbody>
        </table>
        {/* </div> */}
      </div>
    </section>
  )
}

export default PatientAppointmentHistory