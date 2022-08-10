import React from 'react'
import './Working.scss'
import image1 from '../../../Assets/Page-1/Mask-1.png'
import image2 from '../../../Assets/Page-1/Mask-2.png'
import image3 from '../../../Assets/Page-1/Mask-3.png'
import image4 from '../../../Assets/Page-1/Mask-4.png'
import image5 from '../../../Assets/Page-1/Mask-5.png'

const Working = () => {
    return (
        <div className='Working_Container'>
            <div className="working_info">
                <div className="working_heading">HOW WE WORK</div>
                <div className="working_para"> We Follow A Streamlined Outsourcing Process To Ensure Smooth Transition And<br />Completion Of Your Project.
                </div>
            </div>
            <div className="working_cards">
                <div className="wd-card">
                    <img src={image1} alt="Error" />
                    <div className="card_heading">Establish Contact</div>
                    <div className="card_para">Customer Fills Up The Inquiry<br />Form And Receives A Call Or<br />Email From The Sales Team</div>
                    </div>
                
                <div className="wd-card">
                    <img src={image2} alt="Error" />
                    <div className="card_heading">Requirement Analysis</div>
                    <div className="card_para">Requirement analysis,<br />ballpark estimate, approval,<br />execute pilot project</div>
                </div>
                <div className="wd-card">
                    <img src={image3} alt="Error" />
                    <div className="card_heading">Pricing & Contracting</div>
                    <div className="card_para">Confirm pricing, proposal<br />where required, contracting<br />& SLA sign-of</div>
                </div>
                <div className="wd-card">
                    <img src={image4} alt="Error" />
                    <div className="card_heading">Project Initiation</div>
                    <div className="card_para">Resource deployment &<br />training, project kick-off<br />meeting</div>
                </div>
                <div className="wd-card">
                    <img src={image5} alt="Error" />
                    <div className="card_heading">Project Steady State</div>
                    <div className="card_para">Project execution &<br />management, on-going<br />reporting & feedback</div>
                </div> 

            </div>

        </div>
    )
}

export default Working
