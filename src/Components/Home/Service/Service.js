import React from 'react';
import { ServiceData } from '../../../Data/Data';
import './Service.css'
import ServiceCard from './ServiceCard';
const Service = () => {
    return (
        <section className="services-container">
            <div className="text-center ">
                <h5 className="Our-text">OUR SERVICES</h5>
                <h2 className="service">Services We Provider</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        ServiceData.map(data => <ServiceCard ServiceData={data} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Service;