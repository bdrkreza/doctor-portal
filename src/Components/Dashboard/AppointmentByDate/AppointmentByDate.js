import React from 'react';

const AppointmentByDate = ({ appointment }) => {

    return (
        <div>
            <h2>appointment: {appointment.length}</h2>
            {
                appointment.map(data => <li key={data._id}>{data.name}</li>)
            }
        </div>
    );
};

export default AppointmentByDate;