import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import FutureContent from '../FutureContent/FutureContent'

import OurBlog from '../OurBlog/OurBlog';
import Testimonial from '../Testimonial/Testimonial';
import Doctors from '../Doctors/Doctors';



const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <FutureContent />
            <MakeAppointment />
            <Testimonial />
            <OurBlog />
            <Doctors />

        </div>
    );
};

export default Home;