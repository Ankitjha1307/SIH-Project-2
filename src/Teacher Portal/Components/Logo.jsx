import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

export default function Logo() {
  return (
    <div className='bg-gray-100 text-blue-500  m-2 px-3 py-1 rounded-md flex items-center'>
      <FontAwesomeIcon icon={faUserCheck} className='text-2xl' />
      <span className="font-bold text-3xl ml-1">Attendance Register</span>
    </div>
  )
}


