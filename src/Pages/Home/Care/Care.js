import React from 'react';
import img from '../../../assets/images/broken.jpg'

const Care = () => {
    return (
   
        <div className="card lg:card-side bg-base-100 shadow-xl mt-20">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Exceptional Dental Care, on Your Terms</h2>
                <p className=' text-green-800'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page </p>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Care;