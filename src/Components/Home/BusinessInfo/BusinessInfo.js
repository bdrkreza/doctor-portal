import React from 'react';
import { infoData } from '../../../Data/Data';
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center ">
            <div className="w-75 row">
                {
                    infoData.map(data => <InfoCard info={data} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;