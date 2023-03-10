import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserIcon } from '../../../Assets/Icons/Icons'
import smlogo from '../../../cobhealth-logo.png'
import { HOME } from '../../../routes'

const ADHeader = () => {

  const [mdMenu, setMdMenu] = useState(false)
  const [smMenu, setSmMenu] = useState(false)

  return (
    <div className="mx-auto px-5 py-2 flex items-center justify-between flex-wrap bg-gray-50">

      <div className=' flex justify-between  w-full  items-center'> {/* md:w-auto */}
        <Link
          to={HOME}
          className="title-font font-medium flex items-center mb-4 md:mb-0">
          <div className='flex items-center'>
            <img src={smlogo} alt='md logo' className='h-14' />
            <p className='ml-1 font-bold hidden md:block text-[#0f6198]'>
              CobHealth
            </p>
          </div>
        </Link>
        {/* small screen */}
        <UserIcon className='text-blue-900 text-4xl md:hidden' onClick={() => setSmMenu(!smMenu)} />

        {/* large screen */}
        <div onClick={() => setMdMenu(!mdMenu)} className='md:flex hidden items-center justify-center cursor-pointer'>
          <UserIcon className='text-blue-900 text-4xl mr-5' />
          <p className="mr-12 text-blue-900 font-bold">UserFirstName</p>
        </div>
      </div>

      {/* Small screen */}

      {smMenu ?
        <div className='md:hidden grid text-base items-center justify-end w-full text-right'>
          <div className='grid justify-center w-full font-bold'>
            <Link to={HOME} className=" text-blue-900 font-bold mb-4 cursor-pointer">Profile</Link>
            <Link to={HOME} className="text-white w-fit font-bold items-center bg-blue-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded hover:text-blue-900 text-base mb-8">Sign Out
            </Link>
          </div>
        </div>
        : ""}



      {/* Large screen */}
      <div className='hidden text-base md:flex items-center justify-end text-right w-full'>

        {mdMenu ?
          <div className='px-4 mr-8 flex flex-col'>
            <Link to={HOME} className=" text-blue-900 font-bold cursor-pointer mb-4">Profile</Link>
            <Link to={HOME} className="text-white w-fit font-bold items-center bg-blue-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded hover:text-blue-900 text-base">Sign Out
            </Link>
          </div>
          : ""}
      </div>

    </div>

  )
}

export default ADHeader