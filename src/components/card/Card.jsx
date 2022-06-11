import React from 'react'
import "./card.css"
import { RiMapPin2Fill } from "react-icons/ri";
import Button from '../button/Button';
import { bed, histogram, stat } from "./index"


const Card = ({ himage, title, nBed, amount }) => {
    return (
        <div className='la__popular--card'>
            <div className="la__popular--card_img">
                <img src={himage} alt="header" />
            </div>
            <div className="la__popular--card_body">
                <h6><RiMapPin2Fill size={24} className='logom' />  {title}</h6>
                <div className='d-flex gap-4'>
                    <em><img src={bed} alt="bed" /> {nBed} </em>
                    <em><img src={stat} alt="stat" /> 10x10m </em>
                    <em><img src={histogram} alt="histogram" /> 1600m</em>
                </div>
                <div className='d-flex align-items-center justify-content-between my-3'>
                    <Button classes="btns" text="Book Now" />
                    <h4>{amount}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card