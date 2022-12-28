import React from 'react'
import PDTableRow from './PDTableRow.jsx'


const PDTable = () => {
  return (
    <section class="text-gray-600 body-font">

      <div class="container px-5 py-2 mx-auto">

        {/* <div class="lg:w-5/6 w-full mx-auto overflow-auto"> */}
        <table class="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Type</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Doctor</th>
              <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Status</th>

            </tr>
          </thead>
          <tbody>
            <PDTableRow />
            <PDTableRow />
            <PDTableRow />
            <PDTableRow />

          </tbody>
        </table>
        {/* </div> */}

      </div>
    </section>
  )
}

export default PDTable