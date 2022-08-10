import React from 'react'
import Achievements from './Achievements/Achievements'
import Contact from './Contact/Contact'
import Customer from './Customer/Customer'
import Find from './Find/Find'
import SliderComponent from './Slider/SliderComponent'
import Testimonials from './Testimonials/Testimonials'
import Video from './VideoContainer/Video'
import Working from './Working/Working'
import BoldBorder from '../../Components/Atoms/Border/BoldBorder';

const Home = () => {
  return (
    <>
     <SliderComponent/>
     <Video/>
     <Working/>
     <Achievements/>     
     <Customer/>
     <BoldBorder/>
     <Testimonials/>
     <Find/>
     <Contact/>
    </>
  )
}

export default Home
