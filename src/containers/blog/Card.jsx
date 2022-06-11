import React from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Button } from '../../components';


const Card = ({ himage, title , date }) => {
    return (
        <div className='la__blog--card'>
            <div className="la__blog--card_img">
                <img src={himage} alt="header" className="img-fluid z"/>
            </div>
            <div className="la__blog--card_body">
                <em><RiCheckboxBlankCircleFill className="radio"/> {date}</em>
               <h5>{title}</h5>
                <div className='d-flex align-items-center justify-content-between my-3'>
                    <Button classes="btnsm" text="Book Now" />       
                </div>
            </div>
        </div>
    )
}

export default Card