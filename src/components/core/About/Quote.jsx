import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
  At <span className="text-cyan-400 font-bold">PyVerse Academy</span>, we are dedicated to
  building strong academic foundations and future-ready skills for students.
  Our learning approach <HighlightText text={"combines conceptual clarity"} />,{" "}
  
  <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
    expert guidance
  </span>
  
  , and practical learning to help students master
  <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
    {" "}
    Mathematics, Science, Python, Java, and modern technologies
  </span>{" "}
  while developing logical thinking and problem-solving skills for the future.
</div>
  )
}

export default Quote