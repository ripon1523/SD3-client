import React from 'react';
import clock from '../../assets/images/watch.png'
import marker from '../../assets/images/location.png'
import phone from '../../assets/images/phone.png'
import InfoCard from './InfoCard';


const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: marker,
            bgClass: 'bg-primary'
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: phone,
            bgClass: 'bg-primary'
        },

    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-green-800'>
            {
                cardData.map(card =>
                    <InfoCard
                        key={card.id}
                        card={card}

                    ></InfoCard>)
            }

        </div>
    );
};

export default InfoCards;