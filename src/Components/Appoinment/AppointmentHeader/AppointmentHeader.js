import React from 'react';
import chair from '../../../images/Mask Group 1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({ handleDateChanged }) => {


    return (
        <main style={{ height: '600px' }} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1 col-sm-12">
                <h1>appointment</h1>
                <Calendar
                    onChange={handleDateChanged}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6 col-sm-12">
                <img src={chair} alt="" className="img-fluid " />
            </div>
        </main>
    );
};

export default AppointmentHeader;