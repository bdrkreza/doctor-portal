import React from 'react';


const OurBlogCard = ({ blog }) => {
    const { title, description, name, img, date } = blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body card-deck">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>

        </div>
    );
};

export default OurBlogCard;