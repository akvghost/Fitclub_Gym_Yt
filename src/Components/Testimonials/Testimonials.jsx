import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";

import { useState } from "react";

const Testimonials = () => {
  var tLength = testimonialsData.length;
  const [selectedTestimonial, setSelectedTestimonial] = useState(2);
  var prev = tLength;
  return (
    <div className='Testimonials' id='testimonials'>
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-text'>What They</span>
        <span>Say About Us</span>
        <span>{testimonialsData[selectedTestimonial].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selectedTestimonial].name}
          </span>
          <span> - {testimonialsData[selectedTestimonial].status}</span>
        </span>
      </div>
      <div className='right-t'>
        <div> </div>
        <div> </div>
        <img src={testimonialsData[selectedTestimonial].image} alt='' />
        <div className='Arrows'>
          <img
            src={leftArrow}
            alt='left arrow'
            onClick={() => {
              selectedTestimonial === 0
                ? setSelectedTestimonial(tLength - 1)
                : setSelectedTestimonial((prev) => prev - 1);
            }}
          />
          <img
            src={rightArrow}
            alt='rightarrow'
            onClick={() => {
              selectedTestimonial === tLength - 1
                ? setSelectedTestimonial(0)
                : setSelectedTestimonial((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
