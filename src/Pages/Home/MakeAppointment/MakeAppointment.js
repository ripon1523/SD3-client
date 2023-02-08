import React from 'react';
import background from '../../../assets/images/bgg.jpg'
import doctor from '../../../assets/images/woman2.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} 
        className='flex justify-center items-center mt-40  p-5'>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5' >
                <h3 className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold p3-5'>Appointment</h3>
                <h2 className='text-3xl text-green-800 py-3'>Make an Appointment Today</h2>
                <p className=' text-green-700 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odit cumque error id inventore aperiam sunt quasi sequi repellat vel? Illo velit ut tempora tenetur necessitatibus voluptate repudiandae impedit ex!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odit cumque error id inventore aperiam sunt quasi sequi repellat vel? Illo velit ut tempora tenetur necessitatibus voluptate repudiandae impedit ex!</p>

               
            </div>
        </section>
    );
};

export default MakeAppointment;