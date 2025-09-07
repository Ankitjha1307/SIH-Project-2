import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChalkboardTeacher} from "@fortawesome/free-solid-svg-icons";
import Sidebar from './Sidebar';
import Logo from './Logo';

function Navbar() {
  return (
    <div className='flex items-center p-2 shadow-md bg-gray-100'>
        <button className="text-2xl m-1">
        <Sidebar />
        </button>
        <Logo />
        <div className="m-auto">
          <button className="m-1 font-bold bg-white text-blue-500 border border-blue-500 px-3 py-1 rounded-md flex items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className='text-2xl mr-1'/>Welcome Teacher 1
          </button>
        </div>
        <button className="ml-auto items-center btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">Logout</button>
    </div>
  )
}

export default Navbar