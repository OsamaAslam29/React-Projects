import React from 'react'
import './Achievements.scss'
import Glob from "../../../Assets/Page-1/glob.png"
import Bag from "../../../Assets/Page-1/bag.png"
import Like from "../../../Assets/Page-1/like.png"
import Thela from "../../../Assets/Page-1/thela.png"

const Achievements = () => {
  return (
    <div className="achievement_cobatiner">
    <div className="back_img"></div>
    <div className="lable">
    Our achievements
    </div>
    <div className="details">
    The ones who are crazy enough to think they can change the world, <br /> are the ones that do.
    </div>
    <div className="cards_box">
        <div className="card">
            <img src={Glob} alt="" />
            <div className="data">
                <b>10+</b>
                <p>GLOBAL DELIVERY CENTERS</p>
            </div>
        </div>
        <div className="card">
            <img src={Bag} alt="" />
            <div className="data">
                <b>20</b>
                <p>YEARS OF EXPERIENCE</p>
            </div>
        </div>
        <div className="card">
            <img src={Like} alt="" />
            <div className="data">
                <b>18488+</b>
                <p>HAPPY CUSTOMERS & COUNTING</p>
            </div>
        </div>
        <div className="card">
            <img src={Thela} alt="" />
            <div className="data">
                <b>3500+</b>
                <p>EMPLOYEES</p>
            </div>
        </div>
        </div>                                                     
    </div>
  )
}

export default Achievements
