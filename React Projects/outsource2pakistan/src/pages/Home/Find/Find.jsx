import React from 'react'
import Light from '../../../Components/Atoms/LightButton/Light'
import './Find.css'

const Find = () => {
  return (
    <div className='Find_container'>
        <div className="find_heading">FIND AN EXPERT FOR ANYTHING</div>
        <div className="find_para">Work With Highly-Efficient Freelance Talent From Around The World.<br />Take Control Of Your Project With Designhill.<br />Pay Securely And Confidently.</div>
         <div className="find_button"><Light text="Start Hiring"/>
        <div className="find_hidden">No Hidden Fees.</div></div>

      
    </div>
  )
}

export default Find
