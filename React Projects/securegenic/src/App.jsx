import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
// import Administration from './Pages/Administration/Administration'
// import Application from './Pages/ApplicationManagement/Application'
// import DashBoard from './Pages/DashBoard/DashBoard'
// import DeepDive from './Pages/DeepDive/DeepDive'
// import DeviceHealth from './Pages/DeviceHealthReport/DeviceHeath'
// import EnrollDevices from './Pages/EnrollDevices/EnrollDevices'
// import Device from './Pages/Devices/Device'
// import Wifi from './Pages/WifiProfile/Wifi'
// import Group from './Pages/Group/Group'
import Location from './Pages/Location/Location'
// import Utilities from './Pages/Utilities/Utilities'
// import Reports from './Pages/Reports/Reports'
// import PrivacyPolicy from './Pages/PrivacyPolicy/Privacy'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import DashBoard from './Pages/DashBoard/DashBoard';
import Reports from './Pages/Reports/Reports';
import Utilities from './Pages/Utilities/Utilities';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <>
       <Router>
   
    {/* ********* Pages of Secure Genic Website *********/}
    {/* 
          <Route exact path="/"><DashBoard /></Route>
          <Route path="/DeepDive"><DeepDive /></Route>
          <Route path="/EnrollDevices"><EnrollDevices /></Route>
          <Route path="/Device"><Device /></Route>
          <Route path="/Application"><Application /></Route>
          <Route path="/Wifi"><Wifi/></Route>
          <Route path="/Group"><Group /></Route>
          <Route path="/Location"><Location /></Route>
          <Route path="/Utilities"><Utilities /></Route>
          <Route path="/Administration"><Administration /></Route>
          <Route path="/DeviceHealth"><DeviceHealth /></Route>
          <Route path="/Reports"><Reports /></Route>
          <Route path="/PrivacyPolicy"><PrivacyPolicy /></Route>
    {/* ********* There is no footer section in Secure Genic Website *********/}
    <Switch>
               <Route path="/" component={Home} />
   </Switch>
       </Router>

    </>
  )
}

export default App
