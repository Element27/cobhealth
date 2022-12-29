import { Formik } from 'formik'
import React from 'react'
import { CloseIcon } from '../../../Assets/Icons/Icons'
import { inputStyling, primaryButtonStyling } from '../../../tailwindStyling'

const EditProfile = ({ setEditPopup }) => {
  // const CreateAppointmentSchema = Yup.object().shape({
  //   scheduleTime: Yup.date().required("* required"),
  //   scheduleDate: Yup.date().required("* required"),
  //   scheduleType: Yup.string().required("* required"),
  // });

  return (
    <Formik

      initialValues={{
        firstName: '',
        lastName: '',
        genotype: '',
        bloodGroup: '',
        phone: '',
        email: '',
        address: '',
        DOB: ''
      }}

      onSubmit={async (values, { setSubmitting, resetForm }) => {
        alert(values)
      }}
    >

      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) => (
        <form className="text-gray-600 body-font w-full md:w-3/4 lg:w-2/4 flex items-center justify-center z-10">

          <div className="relative rounded-lg m-4 p-8 flex flex-col bg-gray-100  w-full mt-10 md:mt-0">
            <CloseIcon onClick={() => setEditPopup(false)} className="absolute top-4 right-4 text-lg cursor-pointer" />
            <div className='flex flex-col lg:flex-row justify-between items-center'>
              {/* First Name */}
              <div className="w-full mb-4 md:mx-2">
                <label for="firstName" className="leading-7 text-sm text-gray-600">First Name</label>
                <input type="text" id="firstName" name="firstName" className={inputStyling} />
              </div>
              {/* Last Name */}
              <div className="w-full mb-4 md:mx-2">
                <label for="lastName" className="leading-7 text-sm text-gray-600">Last Name</label>
                <input type="text" id="lastName" name="lastName" className={inputStyling} />
              </div>

            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center'>
              {/* genotype */}
              <div className="w-full mb-4 md:mx-2">
                <label for="genotype" className="leading-7 text-sm text-gray-600">Genotype</label>
                <select id="genotype" name="genotype" className={inputStyling}>
                  <option>Select Genotype</option>
                </select>
              </div>
              {/* Blood group */}
              <div className="w-full mb-4 md:mx-2">
                <label for="bloodGroup" className="leading-7 text-sm text-gray-600">Blood Group</label>
                <select id="bloodGroup" name="bloodGroup" className={inputStyling}>
                  <option>Select Blood Group</option>
                </select>
              </div>

              {/* DOB */}
              <div className="w-full mb-4 md:mx-2">
                <label for="DOB" className="leading-7 text-sm text-gray-600">Date of Birth</label>
                <input type="date" id="DOB" name="DOB" className={inputStyling} />
              </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center'>
              {/* Phone number */}
              <div className="w-full mb-4 md:mx-2">
                <label for="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                <input type="tel" id="phone" name="phone" className={inputStyling} />
              </div>
              {/* Email Address  */}
              <div className="w-full mb-4 md:mx-2">
                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" className={inputStyling} />
              </div>

            </div>

            {/* House Address  */}
            <div className="w-full mb-4   ">
              <label for="address" className="leading-7 text-sm text-gray-600">Home Address</label>
              <input type="text" id="address" name="address" className={inputStyling} />
            </div>

            <button className={primaryButtonStyling}>Save
            </button>

          </div>
        </form>
      )}

    </Formik >
  )

}

export default EditProfile