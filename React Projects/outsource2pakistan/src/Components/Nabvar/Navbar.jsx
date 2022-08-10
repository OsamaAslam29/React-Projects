import React from 'react'
// import './Navbar.scss'
import { RiSearchLine } from 'react-icons/ri';
import { BsChevronCompactDown } from 'react-icons/bs';

const Navbar = () => {
    // eslint-disable-next-line 
  return (
    <div className='Nav_Container'>
    <div className="Navbar">
        <div className="Nav_heading">Outsource 2 Pakistan</div>
        <div className="Registation_part">
            <div className='search_box'>
                <div className="input_icon"><RiSearchLine /></div>
                <div className="input_tag"><input type="text" placeholder='Search' /></div>
                <div className="input_icon"><BsChevronCompactDown /></div>
            </div>
            <div className="work">HOW IT WORK</div>
            <div className="border_right"></div>
            <div className="login">LOGIN</div>
            <div className="sign_up">SIGN UP</div>
        </div>
    </div>
    <div className="Links">
        <div>Home</div>
        <div>Creative Design</div>
        <div>Digital Marketing</div>
        <div>Video & Images</div>
        <div>Soical Media</div>
        <div>Writing & Translation</div>
    </div>
</div>
  )
}

export default Navbar
