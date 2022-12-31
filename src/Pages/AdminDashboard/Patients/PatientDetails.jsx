import React from 'react'
import PatientAppointmentDetails from './PatientAppointmentDetails'
import PatientAppointmentHistory from './PatientAppointmentHistory'
import PatientNOKDetials from './PatientNOKDetials'

const PatientDetails = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">

        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-b border-gray-500 mb-12 md:mb-16">

          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />

          <div className="container px-5 py-2 mx-auto ">

            <table className="table-auto w-full text-left whitespace-no-wrap overflow-x-scroll">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"> </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"> </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"> </th>
                </tr>
              </thead>
              <tbody className=''>
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
                  <td className="font-semibold px-4 py-1">Genotype:</td>
                  <td className="px-4 py-1">AS</td>
                </tr>
                <tr>
                  <td className="font-semibold px-4 py-1">Blood Group:</td>
                  <td className="px-4 py-1">O+</td>
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
          </div>
        </div>

        <PatientNOKDetials />
        <PatientAppointmentHistory />
        {false && <PatientAppointmentDetails />}
      </div>

    </section>

  )
}

export default PatientDetails