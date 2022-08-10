import React from 'react'
import "./Customer.scss"
import customer from '../../../Assets/Page-1/Group 231.png'
const Customer = () => {
  return (
    <div className='Customer_container'>
        <div className="customer_heading">OUR CUSTOMERS</div>
        <div className="customer_para">We Are Privileged To Work With The Best In The Business.Happy Clients<br />Make Us Happy.</div>
        <div className="customer_image"><img src={customer} alt="" /></div>
      
    </div>
  )
}

export default Customer
