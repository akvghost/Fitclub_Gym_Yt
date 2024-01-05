import React, { useRef } from "react";
import "./Join.css";
import emailJs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_wxzligf",
        "template_fahhi8a",
        form.current,
        "1GiqKgRFz-lXdraio"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='join' id='join-us'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>Ready TO</span>
          <span>Level up</span>
        </div>

        <div>
          <span>Your body</span>
          <span className='stroke-text'>With Us?</span>
        </div>
      </div>
      <div className='right-j' id='join_us'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input
            type='email'
            name='user_email'
            placeholder='Enter your email address'
          />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
