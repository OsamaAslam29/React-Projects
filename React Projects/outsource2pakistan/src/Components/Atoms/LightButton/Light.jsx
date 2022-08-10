import React from 'react'
import './Light.scss'

const Light = (props) => {
  return (
    <div className="light_button">
        <button>{props.text}</button>
    </div>
  )
}

export default Light
