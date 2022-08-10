import React from 'react'
import "./Testimonials.scss"
import Carousel from 'react-material-ui-carousel'
import SmallCircle from "../../../Assets/Page-1/slider2_small_circle.png"
import Circle from "../../../Assets/Page-1/slider2_circle.png"
import Girl from "../../../Assets/Page-1/slider2_girl.png"
import StartQuot1 from "../../../Assets/Page-1/slider2_start_quot.png"
import StartQuot2 from "../../../Assets/Page-1/slider2_start_quot2.png"
import EndQuot1 from "../../../Assets/Page-1/slider2_end_quot.png"
import EndQuot2 from "../../../Assets/Page-1/slider2_end_quot2.png"


const Testimonials = () => {
    return (
        <>
            <div className="testimonials_container">
                <div className="lable">
                    TESTIMONIALS
                </div>
                <div className="slider_box">
                    <Carousel height="250px"    >
                        <div className='slider'>
                            <div className="image_box">
                                <img className='small_circle' src={SmallCircle} alt="" />
                                <img className='circle' src={Circle} alt="" />
                                <img className='girl' src={Girl} alt="" />
                            </div>
                            <div className="content_box">
                                <img className='start1' src={StartQuot1} alt="" />
                                <img className='start2' src={StartQuot2} alt="" />
                                I am satisfied with the training given by XYZ Pvt. Ltd on Web Designing. During training, the faculty was able to clear my doubts regarding design process.
                                <img className='end1' src={EndQuot1} alt="" />
                                <img className='end2' src={EndQuot2} alt="" />
                            </div>
                        </div>
                        <div className='slider'>
                            <div className="image_box">
                                <img className='small_circle' src={SmallCircle} alt="" />
                                <img className='circle' src={Circle} alt="" />
                                <img className='girl' src={Girl} alt="" />
                            </div>
                            <div className="content_box">
                                <img className='start1' src={StartQuot1} alt="" />
                                <img className='start2' src={StartQuot2} alt="" />
                                I am satisfied with the training given by XYZ Pvt. Ltd on Web Designing. During training, the faculty was able to clear my doubts regarding design process.
                                <img className='end1' src={EndQuot1} alt="" />
                                <img className='end2' src={EndQuot2} alt="" />
                            </div>
                        </div>
                        <div className='slider'>
                            <div className="image_box">
                                <img className='small_circle' src={SmallCircle} alt="" />
                                <img className='circle' src={Circle} alt="" />
                                <img className='girl' src={Girl} alt="" />
                            </div>
                            <div className="content_box">
                                <img className='start1' src={StartQuot1} alt="" />
                                <img className='start2' src={StartQuot2} alt="" />
                                I am satisfied with the training given by XYZ Pvt. Ltd on Web Designing. During training, the faculty was able to clear my doubts regarding design process.
                                <img className='end1' src={EndQuot1} alt="" />
                                <img className='end2' src={EndQuot2} alt="" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Testimonials
