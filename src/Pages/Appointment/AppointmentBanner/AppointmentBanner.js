import React, { useState } from 'react';
import love from '../../../assets/images/love-1.jpg'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    

    return (
        <header className='my-6'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={love} alt='' className="rounded-lg lg:w-3/5 shadow-2xl" />
                    <div className='mr-6'>
                    <DayPicker 
                    mode='single' 
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className='text-green-800' />

                    {/* <p className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'> Selected : {format(selectedDate,'PPPP')}</p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;