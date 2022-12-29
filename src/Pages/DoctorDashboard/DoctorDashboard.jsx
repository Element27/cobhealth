import React from 'react'
import AppoinmentReport from './AppoinmentReport'
import DDTable from './DDTable/DDTable'
import DDTop from './DDTop/DDTop'

const DoctorDashboard = () => {
  return (
    <div className='relative'>
      <DDTop />
      <DDTable />
      {/* disable until report are created with ids */}
      {false && <AppoinmentReport />}
      {/* Create the top components */}
      {/* Create the table components */}
    </div>
  )
}

export default DoctorDashboard