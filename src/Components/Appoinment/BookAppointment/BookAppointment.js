import React from 'react';
import { bookingData } from '../../../Data/Data';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({ date }) => {
    return (
        <section>
            <div className="mt-5">
                <h1 className="text-center text-info ">Available Appointment on {date.toDateString()}</h1>
            </div>
            <div className="row mt-5">
                {
                    bookingData.map(data => <BookingCard booking={data} date={date} kew={data.id} />)
                }
            </div>
        </section>
    );
};

export default BookAppointment;