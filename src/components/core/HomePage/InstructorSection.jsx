import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-[50%]">
            <img
              src={Instructor}
              alt=""
              className="shadow-white shadow-[0px_0px_0_0]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Why 
              <HighlightText text={"PyVerse Academy ?"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-100">
              ✅ Courses in Math, Science, Ai, Python, Java & modern tech <br></br>
              ✅ Experienced and supportive instructors <br></br>
✅ Strong focus on concept clarity <br></br>
✅ Regular tests and performance tracking <br></br>
✅ Practical learning with real-world examples<br></br>
✅ Personalized attention for every student <br></br>

            </p>

            <div className="w-fit">
              <CTAButton
  active={true}
  linkto={"https://wa.me/918637810559"}
>
  <div className="flex items-center gap-3">
    🚀 Join PyVerse Academy Today
    <FaArrowRight />
  </div>
</CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InstructorSection