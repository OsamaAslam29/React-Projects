import React from 'react'
import devices from '../../Assets/Navbar/dashboard.png'
import './Dashboard.scss'
import Aside from '../../Components/AsideBar/Aside'
import Heading from '../../Components/0-Atoms/Heading/Heading'
import CardHeading from '../../Components/0-Atoms/CardHeading/CardHeading'

const DashBoard = () => {
  return (
    <div className='wrape_dashboard'>   
      <div className="dashboard">
        <Heading heading="Dashboard" para="View Status of devices and Application"/> 
         <div className="d_cards">
          <div className="card">
            <div className="c_icon">
              <img src={devices} alt="" />
            </div>
            <div className="c_heading">
              <CardHeading heading="Devices" para="18"/>
            </div>
          </div>
          <div className="card">
            <div className="c_icon">
              <img src={devices} alt="" />
            </div>
            <div className="c_heading">
              <CardHeading heading="Devices" para="18"/>
            </div>
          </div>
          <div className="card">
            <div className="c_icon">
              <img src={devices} alt="" />
            </div>
            <div className="c_heading">
              <CardHeading heading="Devices" para="18"/>
            </div>
          </div>
          <div className="card">
            <div className="c_icon">
              <img src={devices} alt="" />
            </div>
            <div className="c_heading">
              <CardHeading heading="Devices" para="18"/>
            </div>
          </div>
        </div> 

      </div>
      

    </div>
  )
}

export default DashBoard
