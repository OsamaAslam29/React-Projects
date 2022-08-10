import React from 'react'
import Carousel from 'react-material-ui-carousel'

import Bag from "../../../Assets/Page-1/slider_bag_image.png"
import Person from "../../../Assets/Page-1/slider_person_image.png"
import Circle from "../../../Assets/Page-1/slider_circle_image.png"
import Search from "../../../Assets/Page-1/slider_search_image.png"


import "./Slider.scss"
const SliderComponent = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
        ,
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    function Item(props) {
        return (
            <div className="slider_box">
                <div className="img_box">
                    <img src={Bag} alt="" />
                </div>
                <div className="content_box">
                    <p> Build Your Brand With </p>
                    <p>The #1 Creative <span> <img src={Circle} alt="" /> Marketplace </span></p>
                    <p className='detail'> Access global talent on the freelancer website trusted <br />
                        by over 1 million businesses worldwide. </p>

                    <div className="input_box">
                        <img src={Search} alt="" />
                        <input type="text" name="" id="" placeholder='Whar are you looking for? E.g. Logo Design' />
                    </div>
                    <div className="skils">
                        <p> Popular Skills : </p> <p className="s"> Logo Design </p> <p className="s"> Mobile UI/UX </p> <p className="s">3D Character Animation</p>
                    </div>
                </div>
                <div className="img_box">
                    <img src={Person} alt="" />
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="slider_container">
                <Carousel height="400px" indicatorContainerProps={{style:{ position:"absolute" , bottom:"10px" , zIndex:"100"}}}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </>
    )
}

export default SliderComponent
