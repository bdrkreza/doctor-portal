import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({ ServiceData }) => {
    const { name, img, description } = ServiceData;
    return (
        <>
            <div className="col-md-4 text-center">
                <img className="service-img" src={img} alt="" />
                <h5>{name}</h5>
                <p className='service-description'>{description}</p>
            </div>
        </>
    );
};

export default ServiceCard;