import React from 'react'
import { Formik } from 'formik'
// import * as Yup from "yup";
import { inputStyling, textareaStyling, primaryButtonStyling } from '../../tailwindStyling'


const CreateAppointment = () => {


  // const CreateAppointmentSchema = Yup.object().shape({
  //   scheduleTime: Yup.date().required("* required"),
  //   scheduleDate: Yup.date().required("* required"),
  //   scheduleType: Yup.string().required("* required"),
  // });

  return (
    <Formik

      initialValues={{
        date: '',
        time: '',
        type: ''
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
        <form className="text-gray-600 body-font w-full md:w-1/3 flex items-center justify-center z-10">

          <div className="rounded-lg m-4 p-8 flex flex-col bg-gray-100  w-full mt-10 md:mt-0">


            <div className="relative mb-4">
              <label for="appointmentDate" className="leading-7 text-sm text-gray-600">Choose Date</label>
              <input type="date" id="appointmentDate" name="appointmentDate" className={inputStyling} />
            </div>

            <div className="relative mb-4">
              <label for="appointmentTime" className="leading-7 text-sm text-gray-600">Choose Time</label>
              <input type="time" id="appointmentTime" name="appointmentTime" className={inputStyling} />
            </div>

            <div class="relative mb-4">
              <label for="AppointmentType" class="leading-7 text-sm text-gray-600">Type</label>
              <textarea id="AppointmentType" name="AppointmentType" className={textareaStyling}></textarea>
            </div>

            <button className={primaryButtonStyling}>Schedule Appointment
            </button>

          </div>
        </form>
      )}

    </Formik >
  )
}

export default CreateAppointment