import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import n_logo from '../../Assets/Navbar/logo.png'
import n_button from '../../Assets/Navbar/button.svg'
import dash from '../../Assets/Navbar/dashboard.png'
import wifi from '../../Assets/Navbar/wifi_profile.png'
import threshold from '../../Assets/Navbar/threshold.png'
import privacy from '../../Assets/Navbar/privacy_policy.png'
import locataion from '../../Assets/Navbar/location.png'
import groups from '../../Assets/Navbar/groups.png'
import enroll from '../../Assets/Navbar/enroll_devices.png'
import devices from '../../Assets/Navbar/devices.png'
import devicehealth from '../../Assets/Navbar/deviceheath.png'
import deep from '../../Assets/Navbar/deepdive.png'
import administration from '../../Assets/Navbar/administration.png'
import battery from '../../Assets/Navbar/battery_report.png'
import apply from '../../Assets/Navbar/application_management.png'


const Navbar = () => {
    return (
        <div className='Navbar_component'>
            <div className="navbar">
                <div className="logo">
                    <img src={n_logo} alt="image can not load at this time" />
                </div>
                <div className="login_button">
                    <span>Welcome, admin</span>
                    <img src={n_button} alt="" />
                </div>
            </div>
            <div class="sidenav">
                <div className="n_icon">
                    <img src={dash} alt="" />
                    <Link to="/" >Dashboard</Link>
                </div>
                <div className="n_icon">
                    <img src={deep} alt="" />
                    <Link to="/DeepDive" >DeepDive</Link>
                </div>
                <div className="n_icon">
                    <img src={enroll} alt="" />
                    <Link to="/EnrollDevices" >Enroll Devices</Link>
                </div>
                <div className="n_icon">
                    <img src={devices} alt="" />
                    <Link to="/Device" >Devices </Link>
                </div>
                <div className="n_icon">
                    <img src={apply} alt="" />
                    <Link to="/Application" > Application Management</Link>
                </div>
                <div className="n_icon">
                    <img src={wifi} alt="" />
                    <Link to="/Wifi" >Wifi Profile</Link>
                </div>
                <div className="n_icon">
                    <img src={groups} alt="" />
                    <Link to="/Group" >Group</Link>
                </div>
                <div className="n_icon">
                    <img src={locataion} alt="" />
                    <Link to="/Location" >Location</Link>
                </div>
                <div className="n_icon">
                    <img src={threshold} alt="" />
                    <Link to="/Utilities" >Utilities</Link>
                </div>
                <div className="n_icon">
                    <img src={administration} alt="" />
                    <Link to="/Administration" >Administration</Link>
                </div>
                <div className="n_icon">
                    <img src={devicehealth} alt="" />
                    <Link to="/DeviceHealth" >Device Health Report</Link>
                </div>
                <div className="n_icon">
                    <img src={battery} alt="" />
                    <Link to="/Reports" > Reports</Link>
                </div>
                <div className="n_icon">
                    <img src={privacy} alt="" />
                    <Link to="/PrivacyPolicy" >Privacy Policy</Link>
                </div>
            
            </div>
        </div>
    )
}

export default Navbar
