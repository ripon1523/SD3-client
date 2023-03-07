import React from 'react';
import medical from '../../../assets/images/medical.jpg'


const Banner = () => {
    return (
        <div className="hero"
        // style={{
        //     background:`url(${bg})` ,
            
        
        // }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={medical} alt="" className="rounded-lg lg:w-3/5 shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Let's build wellness ,rather than treat disease</h1>
                    <p className="py-6 text-green-800">Many primary care physicians work with other specialists when it comes to more severe conditions such as heart disease. However, the specialist will keep the primary care doctor updated so that they can continue to monitor their patient's condition.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;