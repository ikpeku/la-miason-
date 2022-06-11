import React from 'react'
import "./service.css"
import { RiSubtractFill, RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Button } from '../../components';
import { service1, service2 } from "./index"

const Services = () => {
  return (
    <div className='la-maison__service'>
      <div className="la-maison__service--container d-flex">
        <div className='la-maison__service--container-AB'>
          <div className="la-maison__service--container-A">
            <img src={service1} alt="house" />
          </div>
          <div className="la-maison__service--container-B">
            <img src={service2} alt="house" />
          </div>
        </div>
        <div className="la-maison__service--container-C">
          <p className=''><RiSubtractFill size={50} />  Our services</p>
          <h3>Your Comfort Is Our Priority</h3>
          <p>Finding you a home that you’d love and enjoy staying in is our top priority. Your comfort is key.</p>
          <div className="la-maison__service--container-C__container">
            <div className='d-flex gap-3'>
              <div><RiCheckboxBlankCircleFill className='radio'/></div> <div><p>Free Marketing</p></div>
            </div>
            <div className='d-flex gap-3'>
              <div><RiCheckboxBlankCircleFill  className='radio'/></div> <div><p>Managed Viewings</p></div>
            </div>
            <div className='d-flex  gap-3'>
              <div><RiCheckboxBlankCircleFill className='radio'/></div> <div><p>No Valuations</p></div>
            </div>
            <div className='d-flex gap-3'>
              <div><RiCheckboxBlankCircleFill className='radio'/></div> <div><p>Free Marketing</p></div>
            </div>
          </div>
          <Button classes="btns my-3 me-5" text="See More" />
        </div>
      </div>

    </div>
  )
}

export default Services