import { useState } from 'react'
import "./faq.css"
import { RiSubtractFill, RiCheckboxBlankCircleFill, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Button } from '../../components';


const Faq = () => {
  const [showmessage1, setShowMessage1] = useState(true)
  const [showmessage2, setShowMessage2] = useState(false)
  const [showmessage3, setShowMessage3] = useState(false)


  return (
    <div className="la-maison__faq re ">
      <div className="la-maison__faq-head re">
        <div>
          <h2 className=''><RiSubtractFill size={50} />  faqs</h2>
          <h3>Frequently Asked Questions</h3>
          <p>Have questions you want answers to?</p>
          <Button classes="btns my-3 me-5" text="See More" />
        </div>
      </div>
      <div className="la-maison__faq-body re">

        <div className='message'>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3">
              <RiCheckboxBlankCircleFill className='icon' /> <h5>Do you offer loan services?</h5>
            </div>
            {
              !showmessage1 ?
                <RiArrowDownSLine size={30} onClick={() => setShowMessage1(true)} />
                : <RiArrowUpSLine size={30} onClick={() => setShowMessage1(false)} />
            }

          </div>
          {showmessage1 &&
            <div>
              <p className="ms-4">
                Yes. We offer loans with some of the leading banks in the country like Access Bank, GTBank, Wema Bank e.t.c.
              </p>
            </div>}
        </div>


        <div className='message'>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3">
              <RiCheckboxBlankCircleFill  className='icon' /> <h5>What are capital gains on property purchase?</h5>
            </div>
            {
              !showmessage2 ?
                <RiArrowDownSLine size={30} onClick={() => setShowMessage2(true)} />
                : <RiArrowUpSLine size={30} onClick={() => setShowMessage2(false)} />
            }

          </div>
          {showmessage2 &&
            <div>
              <p className="ms-4">
                Yes. We offer loans with some of the leading banks in the country like Access Bank, GTBank, Wema Bank e.t.c.
              </p>
            </div>}
        </div>


        <div className='message'>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-3">
              <RiCheckboxBlankCircleFill className='icon' /> <h5>What kind of properties are listed on your website?</h5>
            </div>
            {
              !showmessage3 ?
                <RiArrowDownSLine size={30} onClick={() => setShowMessage3(true)} />
                : <RiArrowUpSLine size={30} onClick={() => setShowMessage3(false)} />
            }

          </div>
          {showmessage3 &&
            <div>
              <p className="ms-4">
                Yes. We offer loans with some of the leading banks in the country like Access Bank, GTBank, Wema Bank e.t.c.
              </p>
            </div>}
        </div>

      </div>
    </div>
  )
}



export default Faq;