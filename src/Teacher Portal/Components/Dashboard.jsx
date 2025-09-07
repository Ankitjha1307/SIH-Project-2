import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChartSimple, faListCheck, faCircleExclamation, faFileWaveform} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className='flex flex-wrap justify-center bg-gray-100 min-h-screen p-6'>
        <div className="card border border-blue-500 border-2 h-100 w-96 shadow-sm m-6 p-2 bg-white text-blue-500 hover:scale-105 transition-shadow duration-300 ">
            <figure>
                <FontAwesomeIcon icon={faChartSimple} className='text-6xl mx-auto mt-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Today's Status: </h2>
                <p className='text-2xl font-bold text-center'>Class 6A: 42/50 present</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">View Details</button>
                </div>
            </div>
        </div>
        <div className="card border border-blue-500 border-2 w-96 shadow-sm m-6 p-2 bg-white text-blue-500 hover:scale-105 transition-shadow duration-300 ">
            <figure>
                <FontAwesomeIcon icon={faListCheck} className='text-6xl mx-auto mt-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Take Attendance</h2>
                <p className='text-xl text-center'>Facial Recognition, Voice Recognition and Manual Attendance.</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">Start Attendance</button>
                </div>
            </div>
        </div>
        <div className="card border border-blue-500 border-2 w-96 shadow-sm m-6 p-2 bg-white text-blue-500 hover:scale-105 transition-shadow duration-300 ">
            <figure>
                <FontAwesomeIcon icon={faCircleExclamation} className='text-6xl mx-auto mt-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Send Alerts</h2>
                <p className='text-xl text-center'>Send SMS to parents of absentees and low attendance students.</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">Send Alerts</button>
                </div>
            </div>
        </div>
        <div className="card border border-blue-500 border-2 w-96 shadow-sm m-6 p-2 bg-white text-blue-500 hover:scale-105 transition-shadow duration-300 ">
            <figure>
                <FontAwesomeIcon icon={faFileWaveform} className='text-6xl mx-auto mt-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Attendance History</h2>
                <p className='text-xl text-center'>This week's average attendance: 89%</p>
                <div className="card-actions justify-end">
                <button className="btn bg-blue-500 border-transparent text-white hover:bg-white hover:text-blue-500">View History</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard