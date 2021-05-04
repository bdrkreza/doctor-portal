import React, { useContext, useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar'

const containerStyle = {
    background: '#F4FDFB',
    height: '100%'
}
const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointment, setAppointment] = useState([]);
    const [loggedInUser,] = useContext(UserContext);

    const handleDateChanged = date => {
        setSelectedDate(date)
    }

    useEffect(() => {
        fetch("http://localhost:5000/appointmentByDate", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate.toDateString(), email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [selectedDate])


    return (
        <div>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChanged}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointment={appointment} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;