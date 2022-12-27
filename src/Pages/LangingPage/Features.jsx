import React from 'react'
import { CommunityIcon, PersonHeartsIcon, ScheduleIcon, VennDiagramIcon } from '../../Assets/Icons/Icons'

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <ScheduleIcon className='w-10 h-10 text-blue-900' />
            </div>
            <div className="flex-grow">
              <h2 className=" text-[#0f6198] text-lg title-font font-bold mb-3">Schedule Appointments</h2>
              <p className="leading-relaxed text-base">Schedule and track your appoinments from your mobile device. No need to worry about cards.</p>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <PersonHeartsIcon className='w-10 h-10 text-blue-900' />
            </div>
            <div className="flex-grow">
              <h2 className=" text-[#0f6198] text-lg title-font font-medium mb-3">Doctors That Care</h2>
              <p className="leading-relaxed text-base">Our doctors are not just professionals, they are human, humane and ready to listen.</p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <VennDiagramIcon className='w-10 h-10 text-blue-900' />
            </div>
            <div className="flex-grow">
              <h2 className=" text-[#0f6198] text-lg title-font font-medium mb-3">Be Part Of Our Family</h2>
              <p className="leading-relaxed text-base">Here, you are not a patient, you are family, You are part of a community that care for you... Like Family.</p>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features