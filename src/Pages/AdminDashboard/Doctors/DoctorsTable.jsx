import React from 'react'
import DoctorsCard from './DoctorsCard'

const DoctorsTable = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-2">

          <DoctorsCard />
        </div>
      </div>
    </section>
  )
}

export default DoctorsTable