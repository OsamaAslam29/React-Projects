import React from 'react'
import './Light.css'

const Light = (props) => {
  return (
    <div className="light_button">
        <button>{props.text}</button>
    </div>
  )
}

export default Light
