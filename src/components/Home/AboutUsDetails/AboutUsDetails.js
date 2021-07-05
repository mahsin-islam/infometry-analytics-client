import React from 'react';
import './AboutUsDetails.css'
const AboutUsDetails = (props) => {
    const { title, subTitle, authorImg } = props.aboutDetail;
    return (
        <div className="col-md-6 ">
            <div className="card border-1 mb-4 rounded shadow p-3  ">
                <div className="row g-0 align-items-center text-md-start ">
                    <div className="col-md-2  ">
                        <img className="width-100 img-fluid " src={authorImg} alt="icon-1" />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body ">
                            <h3 className="card-title">{title}</h3>
                            <p className="card-text">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsDetails;