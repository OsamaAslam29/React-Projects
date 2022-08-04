import React from 'react'
import './Brand.css'
import duran from '../../Assets/images/Page-1/duran.png';
import man from '../../Assets/images/Page-1/man.png';

export default function Brand() {
  return (
    <div className='brand_container'>
        <div className="duran">
            <img src={duran} alt="" />
        </div>
        <div className="center_data">
            <div className="section-1">Build Your Band With <br />The #1 Creative</div>
            <div className="section-2">Access Globle Talent On The Freelancer Website Treasted <br /> By Over One Million Bussiness Worldwide.</div>
            <div className="section-3">
                <input type="text" placeholder='Where are you looking for? e.g. Logo Design'/>
            </div>
            <div className="section-4"></div>
                <span>Popular Skills :</span>
                <a href="#">Logo Design</a>
                <a href="#">Mobile UI/UX</a>
                <a href="#">3D Character Animation</a>


        </div>
        <div className="man">
            <img src={man} alt="" />
        </div>
      
    </div>
  )
}
