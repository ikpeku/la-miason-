import React from 'react'
import "./blog.css"
import { RiSubtractFill, RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Button } from '../../components';
import Card from "./Card"

import { house1, house2, house3, headerimg2 } from "../../components/card/index"


const Blog = () => {
  return (
    <div className="la-maison__blog py-5">
      <div className="la-maison__blog-head">
        <div>
          <h2 className=''><RiSubtractFill size={50} />  Our Blog</h2>
          <h3>Latest Information</h3>
        </div>
        <div>
          <p>Stay up to date with all the information about our listed properties</p>
        </div>
        <div>
          <Button classes="btns my-3 me-5" text="See More" />
        </div>
      </div>
      <div className="la-maison__blog-body d-flex gap-5">
        <Card
          himage={house2}
          title="The Challenges Of Investment In Real Estate"
          date="3 June 2022" />
        <Card
          himage={house3}
          title="Omo Onile: A Menace To The Real Estate Sector"
          date="4 June 2022" />
        <Card
          himage={headerimg2}
          title="Would The Regulation Of Real Estate Provide A Better Housing Plan"
          date="5 June 2022" />
      </div>
    </div>
  )
}

export default Blog