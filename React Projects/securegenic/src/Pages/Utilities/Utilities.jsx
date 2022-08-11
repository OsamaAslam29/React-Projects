import React from 'react'
import './Utilities.scss'
import the from '../../Assets/Utilities/threshoud.png'
import blue from '../../Assets/Utilities/bluetooth.png'
import mike from '../../Assets/Utilities/mike.png'
import Heading from '../../Components/0-Atoms/Heading/Heading'

const Utilities = () => {
  return (
    <div className='Utilities_Page'>
        <Heading heading="Utilities" para="Collection of nifty utilities to make your device management even more easy."/>
        <div className="u_cards">
          <div className="flex_card">
            <div className="u_card">
              <div className="u_image">
                <img src={the} alt="" />
                <p className='position'>75%</p>
              </div>
              <div className="u_contant">
                <Heading heading="Threshold" para="Please Set Battery Threshold"/>
              </div>
            </div>
            <div className="u_card">
              <div className="u_image">
                <img src={blue} alt="" />
              </div>
              <div className="u_contant">
                <Heading heading="Bluetooth Setting" para="This feature allows you to  Enable/Disable Bluetooth on Devices."/>
              </div>
            </div>
            <div className="u_card">
              <div className="u_image">
                <img src={mike} alt="" />
              </div>
              <div className="u_contant">
                <Heading heading="Volume Setting" para="This feature allows you to Enable/Disable Volume on Devices."/>
              </div>
            </div>
          </div>
        </div>

        




    </div>
  )
}

export default Utilities
