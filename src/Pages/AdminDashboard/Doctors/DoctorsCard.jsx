import React from 'react'

const DoctorsCard = () => {
  return (
    <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-100 cursor-pointer">
        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
        <div class="flex-grow">
          <h2 class="text-gray-900 title-font font-medium">Damilotun Akinbo</h2>
          <p class="text-gray-500">Doctor</p>
        </div>
      </div>
    </div>
  )
}

export default DoctorsCard