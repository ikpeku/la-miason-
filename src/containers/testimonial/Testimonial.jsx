import { useState } from 'react'
import "./testimonial.css"
import { RiSubtractFill, RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import Agent from './Agent';
import { client1, client2, client3, client4 } from './index';




const Testimonial = () => {

  const [showCarousol, setShowCarousol] = useState(false);



  // slide-out-right
  // slide-out-left 

  // const setHandleShowCarousol = () => {

  //   neme = ["slide-out-left", "d-flex"]

  // }

  return (
    <div className="la-maison__testimonial--wraper">
      <div className="la-maison__testimonial py-5">
        <div className="la-maison__testimonial-head">
          <div>
            <h2 ><RiSubtractFill size={50} />  testimonials</h2>
            <h3 className='title'>What Our Clients Say About Us</h3>
          </div>
          <div>
            {showCarousol ?
              <RiArrowLeftLine size={40}
                onClick={() => setShowCarousol(false)} className="arrow" />
              :
              <RiArrowLeftLine size={40}
                onClick={() => setShowCarousol(true)} className="arrow" />
            }

            {!showCarousol ?
              <RiArrowRightLine size={40}
                onClick={() => setShowCarousol(true)} className="arrow" />
              : <RiArrowRightLine size={40}
                onClick={() => setShowCarousol(false)} className="arrow" />
            }
          </div>

        </div>
        <div className="la-maison__testimonial-body">
          {!showCarousol && <div className="la-maison__testimonial-body-client d-flex">
            <Agent
              img={client3}
              title="Fikayo Tomori"
              text="I am very impressed with the service of La Maison. I’d definitely recommend them to my buddies."
              career="Footballer" />

            <Agent
              img={client4}
              title="Anne Harlow"
              text="I am very impressed with the service of La Maison. I’d definitely recommend them to my buddies."
              career="Actress" />
          </div>}


          {showCarousol && <div className="la-maison__testimonial-body-client d-flex">
            <Agent
              img={client1}
              title="Fikayo Tomori"
              text="I am very impressed with the service of La Maison. I’d definitely recommend them to my buddies."
              career="Footballer" />

            <Agent
              img={client2}
              title="Fikayo Tomori"
              text="I am very impressed with the service of La Maison. I’d definitely recommend them to my buddies."
              career="Footballer" />
          </div>}
        </div>

      </div>
    </div>
  )
}

export default Testimonial;