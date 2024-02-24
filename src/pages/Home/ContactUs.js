import React from "react";
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <div style={{
        background:`url(${appointment})`
    }} className='bg-primary px-10 py-14 my-28'>
      <div className='text-center pb-14 text-white'>
      <h5 className='text-primary font-bold text-center'>Contact Us</h5>
        <h1 className='text-4xl'>Stay connected with us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary mt-8">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;