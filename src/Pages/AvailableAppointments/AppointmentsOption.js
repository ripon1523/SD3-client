import React from 'react';

const AppointmentsOption = ({ appointmentOption,setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="  text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">{name}</h2>
                <p className='text-green-800'>
                    { slots.length > 0 ? slots[0] : 'Try another day'}
                </p>
                <p className='text-green-800'>
                    {slots.length} spaces available
                </p>
                <div className="card-actions justify-center mt-2">
               
                <label 
                htmlFor="booking-modal" 
                className="btn tn-primary bg-gradient-to-r from-primary to-secondary text-white"
                onClick={()=> setTreatment(appointmentOption)}
                >Book Appointment
                </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsOption;