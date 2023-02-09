import React from 'react';
import appointment from '../../../assets/images/back.jpg'

const Contact = () => {
    return (
        <div style={{
            background:`url(${appointment})`
        }} className='bg-primary px-10 py-14 w-4/5 ml-14 '>
          <div className='text-center pb-14 text-white'>
            <p className=' text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold'>
              Contact Us
            </p>
            <h1 className='text-4xl text-green-1100'>Stay connected with us</h1>
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
             <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
          </div>
        </div>
      );
};

export default Contact;