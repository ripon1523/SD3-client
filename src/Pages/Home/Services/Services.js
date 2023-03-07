import React from 'react';
import img1 from '../../../assets/images/leg.png'
import img2 from '../../../assets/images/leg-2.png'
import img3 from '../../../assets/images/mobile.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Annual checkups',
            description: "A primary care doctor can complete yearly checkups, which are important, especially as we get older. They are also familiar with their patients' medical histories and will know what they are at a higher risk for.",
            img: img1
        },
        {
            id: 2,
            name: 'Proper disease diagnosis',
            description: "Primary care doctors can do physical exams or run lab tests to diagnose diseases or other illnesses.!",
            img: img2
        },
        {
            id: 3,
            name: 'Preventive services',
            description: "Many primary care doctors provide health promotion education to help prevent illnesses or diseases.",
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