import React from 'react';
import { blog } from '../../../Data/Data';
import OurBlogCard from '../OurBlogCord/OurBlogCard';
import './OurBlog.css'

const OurBlog = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        blog.map(blog => <OurBlogCard blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurBlog;