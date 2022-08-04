import React from 'react'
import './Services.css'
import cup from '../../Assets/images/Page-1/cup.png'
import Button from '../Atoms/Button/Button'

export default function Services() {
  return (
    <div className='Services_container'>
        <div className="flex_card">
            <div className="cards">  
                <div className="card">
                    <div className="card_image"><img src={cup} alt="error" /></div>
                    <div className="card_heading">Desktop Publishing <br />Services</div>
                    <div className="card_btn"><Button text="Learn More"/></div>
                </div>
                <div className="card">
                    <div className="card_image"><img src={cup} alt="error" /></div>
                    <div className="card_heading">Desktop Publishing <br />Services</div>
                    <div className="card_btn"><Button text="Learn More"/></div>
                </div>
                <div className="card">
                    <div className="card_image"><img src={cup} alt="error" /></div>
                    <div className="card_heading">Desktop Publishing <br />Services</div>
                    <div className="card_btn"><Button text="Learn More"/></div>
                </div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="card_image"><img src={cup} alt="error" /></div>
                    <div className="card_heading">Desktop Publishing <br />Services</div>
                    <div className="card_btn"><Button text="Learn More"/></div>
                </div>
                <div className="card">
                    <div className="card_image"><img src={cup} alt="error" /></div>
                    <div className="card_heading">Desktop Publishing <br />Services</div>
                    <div className="card_btn"><Button text="Learn More"/></div>
                </div>
                <div className="card">
                    <div className="card_image"><img src={cup} alt="error" /></div>
                    <div className="card_heading">Desktop Publishing <br />Services</div>
                    <div className="card_btn"><Button text="Learn More"/></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
