import React from 'react';

const InfoCard = ({ card }) => {

    const { name, description, icon, bgClass } = card;

    return (
        <div className="card px-10 md:card-side bg-base-100 shadow-xl">
            <figure>

                <img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-10">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;