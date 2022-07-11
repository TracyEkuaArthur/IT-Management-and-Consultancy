import React from 'react'
import {MdOutlineArrowRight} from "react-icons/md"

const section1 = () => {
  return (
    <div>
      <div className='h-[85vh] w-full flex justify-evenly'>
        <div className='w-96 h-[70vh] bg-pink-50'>
          <div>
            <p className='font-semibold text-2xl text-gray-900 mt-12 ml-28'>All Services</p>
          </div>
          <div className='h-14 w-72 ml-10 mt-8 bg-white'>
            <p className='ml-10 mt-3 font-medium text-lg text-gray-700'>Web Development</p>
          </div>
          <div className='h-14 w-72 ml-10 mt-4 bg-white'>
            <p className='ml-10 mt-3 font-medium text-lg text-gray-700'>Data Management</p>
          </div>
          <div className='h-14 w-72 ml-10 mt-4 bg-red-600'>
            <p className='ml-10 mt-3 font-medium text-lg text-white'>Cyber Security</p>
          </div>
          <div className=' h-14 w-72 ml-10 mt-4 bg-white'>
            <p className='ml-10 mt-3 font-medium text-lg text-gray-700'>Software Development</p>
          </div>
          <div className='h-14 w-72 ml-10 mt-4 bg-white'>
            <p className='ml-10 mt-3 font-medium text-lg text-gray-700'>Cloud Mnagement</p>
          </div>

        </div>
        <div className=' w-[40vw] h-[50vh]' id="service_">
          <div className='border h-24 w-28 ml-96 mt-96 border-red-600'>
            <div className=' h-16 w-20 bg-red-600 mx-3 mt-4'>
              <MdOutlineArrowRight size={50} color='white' className='ml-3 mt-3'/>
            </div>
          </div>
          <div className=' mt-8'>
            <p className='text-gray-900 text-4xl font-bold'>IT Management Service</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section1
