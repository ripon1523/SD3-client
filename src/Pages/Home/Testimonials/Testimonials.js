import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
import Review from './Review';

    const Testimonials = () => {
        const reviews = [
            {
                _id : 1,
                name: 'Dr.Ripon',
                review: '',
                location: 'House Building',
                img: people1
            },
            {
                _id : 2,
                name: 'Dr.Khokon',
                review: '',
                location: 'Mirpur 1',
                img: people2
            },
            {
                _id : 3,
                name: 'Dr. Mehedi ',
                review: '',
                location: 'Jatrabari ',
                img: people3
            },
    
    
    
        ]
        return (
            <section className='my-28'>
                <div className='flex justify-between'>
                    <div>
                        <h4 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold p3-5"> Testimonials</h4>
                        <h2 className='text-3xl text-green-800'>What our patients say? </h2>
                    </div>
                    <div>
                            <img src={quote} className="w-24 lg:w-48" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                        reviews.map(review =><Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
    
                </div>
            </section>
        );
    };
    
    export default Testimonials;