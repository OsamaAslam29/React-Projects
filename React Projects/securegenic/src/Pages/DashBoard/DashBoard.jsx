import React from 'react'
import './Dashboard.scss'
import Aside from '../../Components/AsideBar/Aside'

const DashBoard = () => {
  return (
    <div className='wrape_dashboard'>
      <div className="aside_bar">
            <Aside/>
      </div>
      <div className="dashboard">
        

      </div>
    </div>
  )
}

export default DashBoard
