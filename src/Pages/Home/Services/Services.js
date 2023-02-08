import React from 'react';
import img1 from '../../../assets/images/leg.png'
import img2 from '../../../assets/images/leg-2.png'
import img3 from '../../../assets/images/mobile.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'kisuan',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eveniet nihil assumenda, nostrum adipisci earum!",
            img: img1
        },
        {
            id: 2,
            name: 'kisuan',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eveniet nihil assumenda, nostrum adipisci earum!",
            img: img2
        },
        {
            id: 3,
            name: 'kisuan',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eveniet nihil assumenda, nostrum adipisci earum!",
            img: img3
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold uppercase  '  >Our Services</h3>
                <p className='text-green-800 text-4xl '>Services we provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 text-green-800'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;