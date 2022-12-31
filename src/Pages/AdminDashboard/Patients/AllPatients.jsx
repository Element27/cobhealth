import React from 'react'
import PatientsTable from './PatientsTable'

const AllPatients = () => {
  return (
    <div>
      <PatientsTable />
      {/* onclick of an item the patients' table, the page is navigated to the patient details page  */}
    </div>
  )
}

export default AllPatients