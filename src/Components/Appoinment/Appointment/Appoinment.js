import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChanged = date => {
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbar />
            <AppointmentHeader handleDateChanged={handleDateChanged} />
            <BookAppointment date={selectedDate} />
        </div>
    );
};

export default Appoinment;