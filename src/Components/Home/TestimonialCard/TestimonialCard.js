import React from 'react';
import './TestimonialCard.css'
const TestimonialCard = ({ testimonialData }) => {
    const { name, img, description, country } = testimonialData;
    return (
        <>
            <div class="col-lg-3 col-sm-6 ">
                <div class="card ">
                    <div class="">
                        <p>{description}</p>
                    </div>

                    <div class=" d-flex justify-content-center">
                        <div class="avatar">
                            <img alt="" src={img} />
                        </div>
                        <div class="title">
                            <h5>{name}</h5>
                            <h5>{country}</h5>
                        </div>
                    </div>

                </div>

            </div>
        </>

    );
};

export default TestimonialCard;