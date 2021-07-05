import React from 'react';
import aboutUsBanner from '../../../images/about-us-banner.png';
import iconOne from '../../../images/icon-1.png';
import iconTwo from '../../../images/icon-2.png';
import iconThree from '../../../images/icon-3.png';
import iconFour from '../../../images/icon-4.png';
import './AboutUs.css';
import AboutUsDetails from '../AboutUsDetails/AboutUsDetails';
const AboutUs = () => {
    const aboutUsData = [
        {
            title: '10 Years',
            subTitle: 'On the market',
            authorImg: iconOne
        },
        {
            title: '45+',
            subTitle: 'Team members',
            authorImg: iconTwo
        },
        {
            title: '100%',
            subTitle: 'Satisfaction rate',
            authorImg: iconThree
        },
        {
            title: '80%',
            subTitle: 'Senior scientist',
            authorImg: iconFour
        }
    ]

    return (
        <section className="" id="aboutus">
            
            <div className="container-fluid mb-5">
                <div className="row mb-6 d-flex align-items-center">
                    <div className="col-md-5 mb-4 m-md-0  mx-auto">
                        <img src={aboutUsBanner} alt="" className="img-fluid" style={{ height: '500px' }} />
                    </div>

                    <div className="col-md-6 align-self-center">
                    {/* <h5 style={{ color: '#1CC7C1' }}>ABOUT US</h5> */}
                    <h4 class="miniTitle">ABOUT US</h4>
                        <h1>Drive Digital Revolution Through Data Science</h1>
                        <div className="row ">
                            {
                                aboutUsData.map(aboutDetail => <AboutUsDetails aboutDetail={aboutDetail} key={aboutDetail.title} />)
                            }
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;