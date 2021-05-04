import React from 'react';
import chair from '../../../images/Mask Group 1.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1 col-sm-12">
                <h1>Your new Smile
                    <br />
                    Starts Here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error quibusdam. Dolore assumenda aspernatur ipsam!</p>
                <button className="btn btn-grad">Get appointment</button>
            </div>
            <div className="col-md-6 col-sm-12">
                <img src={chair} alt="" className="img-fluid " />
            </div>
        </main>
    );
};

export default HeaderMain;