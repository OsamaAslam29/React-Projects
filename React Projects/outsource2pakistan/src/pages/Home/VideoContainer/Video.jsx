import React from 'react'
import './video.scss'

const Video = () => {
  return (
    <div className="video_container">
        <div className="video_info">
          <div className="home_heading">BUSINESS PROCESS<br />OUTSOURCING SERVICES TO INDIA</div>
          <div className="home_para">
            Do You Feel The Need To Adapt Quickly To The Changing Market Conditions? Are you <br /> Lacking The Flexibility TO Respond To Dynamic Client Needs? It’s Time To Make Intelligent <br /> Decisions By Partnering With a Trusted Business Process Outsourcing Provider.
          </div>
          <div className="home_para">
            Outsource2Pakistan Is a Pioneering Outsourcing Company Focused On Augmenting <br />Teams. Our Business Process Outsourcing Services Enhance Your Operations By Managing <br />Your Talent Shortages And Keeping Operating Costs Low. We Take Data Security And GDPR <br />Compliance Very Seriously And Our Personnel Management And Processes Reflect It. Our <br />Staff Augmentation Services Delivers The Twin Advantage Of Reduced Cost And Quality.<br />We Leverage This Advantage To Help Businesses Achieve Enhanced Profits, Improved <br />Flexibility And Scalability Without Any Added Risk.
          </div>
          <div className="home_para">
            With Over 22 Years Of Experience In 167 Plus Countries, Our Skilled Resources And Cutting-<br />Edge Tech Solutions Are Part Of Numerous Global Success Stories. We Have Delivered A <br />Wide Variety Of Resources For Different Needs And Across Multiple Industries.
          </div>
        </div>
          <div className="video">
            <div className="doted_border"></div>
          <iframe className="video__link" src="https://www.youtube.com/embed/orbkg5JH9C8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>

          </div>
      </div>
  )
}

export default Video
