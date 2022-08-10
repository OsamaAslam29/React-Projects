import React from 'react'
import './Contact.scss'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Dark from '../../../Components/Atoms/DarkButton/Dark';

const Contact = () => {
  return (
    <div className='Contact_container'>
      <div className="contact_info">
        <div className="contact_bio">
          <div className="contact_heading">GET IN TOUCH</div>
          <div className="contact_para">If You Would Like To Find Out More About What<br /> Outsource 2 Pakistan Can Do For Your Business Or To<br /> Receive A Project Quote, Don’t Hesitate To Contact Us.</div>
        </div>
        <div className="contact_icons">
          <div className='contact_box'>
            <div className="phone"><span><BsFillTelephoneFill /></span></div>
            <div className="phone_icon">
              <div className="phone_heading">Phone</div>
              <div className="phone_para">+923070460959</div>
            </div>
          </div>
          <div className='contact_box'>
            <div className="phone"><span><GrMail /></span></div>
            <div className="phone_icon">
              <div className="phone_heading">Email</div>
              <div className="phone_para">sourcet2pakistan@design.com</div>
            </div>
          </div>
        </div>

      </div>
      <div className="form_box">
        <div className="line">
          <div className="text_box">
            <div className="f-text">Full Name</div>
            <input type="text" placeholder='Muhammad Babar' />
          </div>
          <div className="text_box">
            <div className="f-text">Email</div>
            <input type="text" placeholder='muhammad.babar@viiontech.com' />
          </div>
        </div>
        <div className="line">
          <div className="text_box">
            <div className="f-text">Phone</div>
            <input type="text" placeholder='+923070460959' />
          </div>
          <div className="text_box">
            <div className="f-text">Country</div>
            <input type="text" placeholder='Pakistan' />
          </div>
        </div>
        <div className="line">
          <div className="l-text">
            <div className="f-text">Requirements</div>
            <textarea name="" id="" cols="30" rows="6" placeholder='Enter your requiremnts' ></textarea>
          </div>
        </div>
        <div className="form_button"><Dark name="SUBMIT" /></div>
      </div>


    </div>
  )
}

export default Contact
