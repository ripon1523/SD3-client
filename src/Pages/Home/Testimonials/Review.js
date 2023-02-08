import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">

                <p className='text-green-800'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit aliquam ullam eveniet nam itaque velit.

                </p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary '>{review.name}</h4>
                        <p className='text-green-600'>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;