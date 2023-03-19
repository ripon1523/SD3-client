import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState } from 'react';
import BookingModal from '../Appointment/BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import AppointmentsOption from './AppointmentsOption';

const AvailableAppointments = ({ selectedDate }) => {

    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOptions = [],refetch,isLoading } = useQuery({
        queryKey: ['appointmentOptions',date],
        queryFn: () => fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch('appointmentOptions.json')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <section className='mt-16'>
            <p className=' text-xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary'> Available Appointments on {format(selectedDate, 'PPPP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12'>
                {
                    appointmentOptions.map(option => <AppointmentsOption

                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                        refetch = {refetch}

                    ></AppointmentsOption>)
                }
            </div>
            {
                treatment &&

                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>}

        </section>
    );
};

export default AvailableAppointments;