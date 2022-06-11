import React from 'react'

const Count = ({num, text}) => {
  return (
    <div>
        <h4 className='d-flex'>{num} <span>+</span></h4>
        <em className='d-flex'>{text}</em>
    </div>
  )
}

export default Count