import React from 'react'

const Navbar_Link = ({classes}) => {
    return (
        <div className={classes}>
            <a className='text-decoration-none' href="#home">Home</a>
            <a className='text-decoration-none' href="#about">About Us</a>
            <a className='text-decoration-none' href="#properties">Properties</a>
            <a className='text-decoration-none' href="#agents">Agents</a>
        </div>
    )
}

export default Navbar_Link;