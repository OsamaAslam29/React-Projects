import React from 'react'
import './Footer.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { RiTwitterFill } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer_container'>

    <div className="flex_container">
        <div className="footer_sect-1">
            <div className='footer_logo'> Outsource 2 Pakistan </div>
            <div className='footer_para'>If You Would Like To Find Out More About What <br />
                Outsource 2 Pakistan Can Do For Your Business Or To<br />
                Receive A Project Quote, Don’t Hesitate To Contact Us.</div>
        </div>
        <div className="section">
            <div className='footer_headings'>Product</div>
            <div className='footer_inf0'>About</div>
            <div className='footer_inf0'>Team</div>
            <div className='footer_inf0'>Careers</div>
        </div>
        <div className="section">
        <div className='footer_headings'>Support</div>
            <div className='footer_inf0'>Who It Works</div>
            <div className='footer_inf0'>Trust & safety</div>
            <div className='footer_inf0'>Help Center</div>
        </div>
        <div className="section">
        <div className='footer_headings'>Discover</div>
            <div className='footer_inf0'>Guides</div>
            <div className='footer_inf0'>Stories</div>
            <div className='footer_inf0'>News</div>
        </div>
        <div className="section">
        <div className='footer_headings'>Resources</div>
            <div className='footer_inf0'>Customer Stories</div>
            <div className='footer_inf0'>Business Cost Calculator</div>
            <div className='footer_inf0'>Starup Cities</div>
        </div>
    </div>
    <hr />
    <div className="contact_footer">
        <div className="copy_right">© 2022 People Per Hour Ltd</div>
        <div className="footer_icons">
            <div className="insa"><AiOutlineInstagram/></div>
            <div className="link"><ImLinkedin2/></div>
            <div className="twitter"><RiTwitterFill/> </div>
            <div className="facebook"><FaFacebookF/> </div>
        </div>
    </div>
</div>
  )
}

export default Footer
