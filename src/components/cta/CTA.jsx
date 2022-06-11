import React from 'react'
import "./cta.css"
import { RiMapPin2Fill , RiHomeFill ,RiMoneyDollarCircleFill} from "react-icons/ri";
import Button from '../button/Button';

const CTA = () => {
    return (
        <div className='header__cta bg-white  py-2 border'>
            <h5 className='py-2'>Search for available properties</h5>
            <div className="header__cta--bars d-flex align-items-center justify-content-start gap-3">
                <div className="header__cta--bars__search">
                    <input type="text" placeholder='Location' className='input-btn'/>
                    <RiMapPin2Fill size={24} className='logo'/>
                </div>
                <div className="header__cta--bars__search">
                    <input type="text" placeholder='Property Type' className='input-btn'/>
                    <RiHomeFill size={24}   className='logo'/>
                </div>
                <div className="header__cta--bars__search">
                    <input type="text" placeholder='Budget' className='input-btn'/>
                    <RiMoneyDollarCircleFill size={24}  className='logo'/>
                </div>
                <Button classes="btns my-3 me-5" text="Search Now" />
            </div>
        </div>
    )
}

export default CTA