import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h1>this is AllPatients</h1>
            </div>
        </div>
    );
};

export default AllPatients;