import { Formik } from 'formik'
import React from 'react'
import { inputStyling, primaryButtonStyling } from '../../../tailwindStyling'

const EditNOKinDetials = () => {
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

          <div className="rounded-lg m-4 p-8 flex flex-col bg-gray-100  w-full mt-10 md:mt-0">

            <div className='flex flex-col lg:flex-row justify-between items-center'>
              {/* First Name */}
              <div className="w-full mb-4 md:mx-2">
                <label for="firstName" className="leading-7 text-sm text-gray-600">Next-O-Kin First Name</label>
                <input type="text" id="firstName" name="firstName" className={inputStyling} />
              </div>
              {/* Last Name */}
              <div className="w-full mb-4 md:mx-2">
                <label for="lastName" className="leading-7 text-sm text-gray-600">Next-O-Kin Last Name</label>
                <input type="text" id="lastName" name="lastName" className={inputStyling} />
              </div>

            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center'>
              {/* DOB */}
              <div className="w-full mb-4 md:mx-2">
                <label for="DOB" className="leading-7 text-sm text-gray-600">Next-O-Kin Date of Birth</label>
                <input type="date" id="DOB" name="DOB" className={inputStyling} />
              </div>

              {/* First Name */}
              <div className="w-full mb-4 md:mx-2">
                <label for="Relationship" className="leading-7 text-sm text-gray-600">Relationship with Next-O-Kin</label>
                <input type="text" id="Relationship" name="Relationship" className={inputStyling} />
              </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center'>
              {/* Phone number */}
              <div className="w-full mb-4 md:mx-2">
                <label for="phone" className="leading-7 text-sm text-gray-600">Next-O-Kin Phone Number</label>
                <input type="tel" id="phone" name="phone" className={inputStyling} />
              </div>
              {/* Email Address  */}
              <div className="w-full mb-4 md:mx-2">
                <label for="email" className="leading-7 text-sm text-gray-600">Next-O-Kin Email</label>
                <input type="email" id="email" name="email" className={inputStyling} />
              </div>

            </div>

            {/* House Address  */}
            <div className="w-full mb-4   ">
              <label for="address" className="leading-7 text-sm text-gray-600">Next-O-Kin Home Address</label>
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

export default EditNOKinDetials