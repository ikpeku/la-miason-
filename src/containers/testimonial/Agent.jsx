import React from 'react'
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Agent = ({img,title, text, career}) => {
  return (
    <div className='agent-container gap-5'>
        <div><img src={img} alt="" className='img-fluid'/></div>
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
            <h6 className="d-flex gap-3"><RiCheckboxBlankCircleFill className='icone' />{career}</h6>
        </div>
    </div>
  )
}

export default Agent