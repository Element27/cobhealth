import React from 'react'
import DDTableRow from './DDTableRow'

const DDTable = () => {
  return (
    <section className="text-gray-600 body-font">

      <div className="container px-5 py-2 mx-auto">

        {/* <div className="lg:w-5/6 w-full mx-auto overflow-auto"> */}
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Time</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Type</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Patient</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Status</th>
            </tr>
          </thead>
          <tbody>
            <DDTableRow />
            <DDTableRow />
            <DDTableRow />
            <DDTableRow />

          </tbody>
        </table>
        {/* </div> */}

      </div>
    </section>
  )
}

export default DDTable