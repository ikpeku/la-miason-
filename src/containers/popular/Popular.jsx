import React from 'react'
import "./popular.css"
import { RiSubtractFill, RiArrowRightLine, RiDoubleQuotesL } from "react-icons/ri";
import { Card, Footer } from '../../components';
import { house1, house2, house3, image1, image2 } from "../../components/card/index"



const Popular = () => {
  return (
    <div className='la-maison__popular'>
      <div className="la-maison__popular--container">
        <div className="la-maison__popular--container_housings">
          <p className=''><RiSubtractFill size={50} />  Popular</p>
          <div className='title-holder d-flex align-items-center justify-content-between'>
            <h2>Our Popular Homes</h2>
            <p>Explore All <RiArrowRightLine size={50} className="popular_arrow"/></p>
          </div>
          <div className="la_maison__popular--cards d-flex align-items-center justify-content-between gap-3">
            <Card himage={house1} title="Banana Island, Lagos" nBed="4 Bed" amount="₦100,000,000" />
            <Card himage={house2} title="Parkview Estate, Lagos" nBed="5 Bed" amount="₦200,000,000" />
            <Card himage={house3} title="Eko Atlantic, Lagos" nBed="3 Bed" amount="₦500,000,000" />
          </div>
        </div>

        <div className="la-maison__popular--footer">

          <div className="la-maison__popular--footer_container">
            <div className="la-maison__popular--footer_row1 d-flex  justify-content-between">
              <div className="la-maison__popular--footer_subA">
                <h4>Kevin Durant</h4>
                <p>Founder, La Maison</p>
              </div>
              <div className="la-maison__popular--footer_subB d-flex">
                <div><RiDoubleQuotesL className='quote' size={40} /> </div>
                <div>
                  <p>Our business is built off of close relationships
                    and we are glad that we are able to share our positive real estate experiences with ur clients.
                  </p>
                </div>
              </div>
            </div>
            <hr className='line'/>
            <div className="la-maison__popular--footer_row2 d-flex align-items-center justify-content-between py-5">
              <Footer img={image1} />
              <Footer img={image2} />
              <Footer img={image1} />
              <Footer img={image2} />
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Popular