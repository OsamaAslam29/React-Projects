import React from 'react'
import './Services.css'
import cup from "../../Assets/images/Page-1/cup.png"

export default function Services() {
  return (
    <div className='Services_container'>
        <div className="flex_card">
            <div className="cards">
                <div className="card">
                    <img src={cup} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}
