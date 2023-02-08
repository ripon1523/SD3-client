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
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Box Office News!</h1>
                    <p className="py-6 text-green-800">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;