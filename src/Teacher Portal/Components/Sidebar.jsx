import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faLandmark, faCircleCheck, faSquarePollVertical, faGear} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
  <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn bg-white text-blue-500 border border-blue-500 drawer-button"><FontAwesomeIcon icon={faBars} /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-blue-500 text-base-content min-h-full w-80 p-4">
      <li><a><FontAwesomeIcon icon={faLandmark} className='mr-2' />Classes</a></li>
      <li><a><FontAwesomeIcon icon={faCircleCheck} className='mr-2' />Take Attendance</a></li>
      <li><a><FontAwesomeIcon icon={faSquarePollVertical} className='mr-2' />Reports</a></li>
      <li><a><FontAwesomeIcon icon={faGear} className='mr-2' />Settings</a></li>
    </ul>
  </div>
</div>
  )
}

export default Sidebar