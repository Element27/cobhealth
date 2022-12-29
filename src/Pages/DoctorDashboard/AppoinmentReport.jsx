import { Formik } from 'formik'
import React from 'react'
import { CloseIcon } from '../../Assets/Icons/Icons'
import { inputStyling, primaryButtonStyling, textareaStyling } from '../../tailwindStyling'

const AppoinmentReport = () => {
  // const CreateAppointmentSchema = Yup.object().shape({
  //   scheduleTime: Yup.date().required("* required"),
  //   scheduleDate: Yup.date().required("* required"),
  //   scheduleType: Yup.string().required("* required"),
  // });

  return (
    <Formik

      initialValues={{
        isComplete: '',
        comment: ''
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
            <CloseIcon /*onClick={() => setEditPopup(false)} */ className="absolute top-4 right-4 text-lg cursor-pointer" />

            <table className="table-auto w-full text-left font-semibold whitespace-no-wrap mb-4 border border-gray-300 rounded-2xl">
              <tbody>
                <tr className='border-b border-gray-300'>
                  <td className="px-2 py-1">Patient's Name</td>
                  <td className="px-2 py-1">John Paul</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className="px-2 py-1">Type</td>
                  <td className="px-2 py-1">Check Up</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className="px-2 py-1">Date</td>
                  <td className="px-2 py-1">12/12/22</td>
                </tr>
                <tr className='border-b border-gray-300'>
                  <td className="px-2 py-1">Time</td>
                  <td className="px-2 py-1">2:00 PM</td>
                </tr>
              </tbody>
            </table>


            <div className='flex flex-col lg:flex-row justify-between items-center'>

              <h3>Appointment Status</h3>
              {/* Complete */}
              <div className="w-full mb-4 md:mx-2 flex flex-col items-center justify-center">
                <label for="Complete" className="leading-7 text-sm text-gray-600">Complete</label>
                <input type="radio" name="isComplete" value={true} className={inputStyling} />

              </div>

              {/* incomplete */}
              <div className="w-full mb-4 md:mx-2 flex flex-col items-center justify-center">
                <label for="inComplete" className="leading-7 text-sm text-gray-600">Incomplete</label>
                <input type="radio" name="isComplete" value={false} className={inputStyling} />
              </div>
            </div>

            <div class="relative mb-4">
              <label for="comment" class="leading-7 text-sm text-gray-600">Report/Comment</label>
              <textarea id="comment" name="comment" className={textareaStyling}></textarea>
            </div>

            <button className={primaryButtonStyling}>Save
            </button>
          </div>

        </form>
      )}

    </Formik >
  )
}

export default AppoinmentReport