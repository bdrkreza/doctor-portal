import React from 'react';
import { testimonialData } from '../../../Data/Data';

import TestimonialCard from '../TestimonialCard/TestimonialCard';

import './Testimonial.css'

const Testimonial = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 py-4 text-testimonial">
                    <h4>Testimonial</h4>
                    <h1>What's OUr Patients <br /> Says</h1>
                </div>
                <div className='col-md-6'>

                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                {
                    testimonialData.map(data => <TestimonialCard testimonialData={data} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;