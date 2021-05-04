import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'

const Appointment = () => {
    return (
        <div>
            <div className="appointment-container row">

                <div className="col-md-5">
                    <img className="appoinment-img" src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <h4 className='text-info '>Appointment</h4>

                    <h1 className='text-make'>Make An appointment<br /> Today</h1>
                    <p className='text-description'>It is a long established fact that a reader sill be distractedby the readable content of a page when looking at its</p>
                    <button className="btn  appointment-btn">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;