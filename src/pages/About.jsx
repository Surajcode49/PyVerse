import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import ContactFormSection from "../components/core/About/ContactFormSection"
import LearningGrid from "../components/core/About/LearningGrid"
import Quote from "../components/core/About/Quote"
import StatsComponenet from "../components/core/About/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in  Education for a Brighter Future with
            <HighlightText text={"PyVerse Academy"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              PyVerse Academy is dedicated to empowering students through quality education and modern learning methods. We focus on building strong foundations in Mathematics, Science, Python, Java Programming, and emerging technologies like Artificial Intelligence and Machine Learning. Our goal is to inspire curiosity, strengthen problem-solving skills, and create a supportive learning environment where students can grow academically and prepare for the future.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                PyVerse Academy was founded with a vision to transform the way students learn and grow academically. It began with a passion for providing accessible, structured, and high-quality education in today’s fast-changing world.
                As educators, we understand the challenges students face in traditional learning systems, where concepts are often not clear and individual attention is limited. We believe that education should be concept-driven, practical, and student-focused, rather than confined to rigid methods
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                At PyVerse Academy, we aim to bridge these gaps by offering personalized guidance, interactive learning, and strong conceptual teaching in Mathematics, Science, and modern technologies. Our goal is to help every student build confidence, develop problem-solving skills, and achieve their full potential.
              </p>
            </div>

            <div>
     <img
  src={FoundingStory}
  alt=""
  className="w-80 h-50 ml-70 mr-1 shadow-[0_0_30px_0] shadow-[#FC6767]"
/>
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, PyVerse Academy was established to transform the way students learn and grow academically. Our dedicated team of experienced educators works continuously to provide structured, concept-driven learning in Mathematics, Science, Python, Java, and modern technologies.
We focus on creating an engaging and interactive learning environment through practical sessions, regular assessments, and personalized guidance, ensuring that every student develops strong fundamentals, problem-solving skills, and confidence for future success
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              At PyVerse Academy, our mission goes beyond just teaching subjects. We aim to build a supportive and inspiring learning environment where students can grow together, ask questions freely, and learn with confidence.
              We believe that true understanding develops through interaction, discussion, and continuous practice. That’s why we encourage collaboration through doubt-clearing sessions, regular tests, interactive classes, and personalized guidance, helping students strengthen their concepts and achieve their academic goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About