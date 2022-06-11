import React from 'react'
import "./footer.css"
import { RiTwitterFill, RiInstagramFill, RiFacebookCircleFill, RiLinkedinFill } from "react-icons/ri";
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className='la-maison__footer'>
      <div className='footer-logo'>
        <div className="laMaison__header-container__logosCon d-flex align-items-center">
          <img src={logo} alt="logo" />
          <h4>La Maison</h4>
        </div>
      </div>
      <div className='media-home'>
        <RiTwitterFill size={30} className="media" />
        <RiLinkedinFill size={30} className="media" />
        <RiFacebookCircleFill size={30} className="media" />
        <RiInstagramFill size={30} className="media" />
      </div>
    </div>
  )
}

export default Footer