import React from 'react'

const PatientNOKDetials = () => {
  return (
    <div className="h-full text-center sm:text-left">
      {/* 
    <div className="container px-5 py-2 mx-auto"> */}
      <div className='w-full mb-8'>

        <h3 className='text-xl md:text-2xl text-gray-900'>Patient's Next of Kin Details</h3>
      </div>
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"> </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"> </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"> </th>
          </tr>
        </thead>
        <tbody className='border-b border-gray-500'>
          <tr>
            <td className="font-semibold px-4 py-1">Name:</td>
            <td className="px-4 py-1">Holden Caulfield</td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-1">D.O.B/Age:</td>
            <td className="px-4 py-1">8/8/2000</td>
            <td className="px-4 py-1">22 years old</td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-1">Phone Number:</td>
            <td className="px-4 py-1">08163177517</td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-1">House Address:</td>
            <td className="px-4 py-1">123 Cobhams, London UK</td>
          </tr>
          <tr>
            <td className="font-semibold px-4 py-1">Email Address:</td>
            <td className="px-4 py-1">Holden.cld@gmail.com</td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}
    </div>
  )
}

export default PatientNOKDetials