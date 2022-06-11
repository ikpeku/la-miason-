import React from 'react'
import { Button, Count, CTA } from '../../components'
import Navbar from '../../components/navbar/Navbar'
import "./header.css"
import headerimg from "../../assets/headerimg.png"




const Header = () => {
  return (
    <div className='laMaison__header' id='home'>
      <Navbar />
      <div className="header__container d-flex">
        <div className="header__container--left">
          <h4>Find A House That Suits You</h4>
          <p>Want to find a home? We are ready to help you find one that suits your lifestyle and needs</p>
          <a href="#properties"><Button classes="btns my-3" text="Get Started" /></a>
          <div className='count__holder mt0'>
            <div className='d-flex gap-5 '>
              <Count num="1200" text="Listed Properties" />
              <Count num="4500" text="Happy Customers" />
              <Count num="100" text="Awards" />
            </div>
          </div>
        </div>
        <div className="header__container--right">
          <div className="header__container--right__container">
            <img src={headerimg} alt="" />
          </div>
        </div>
      </div>
      <CTA />
    </div>

  )
}

export default Header