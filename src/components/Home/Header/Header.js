import React from 'react';
import banner from '../../../images/hero.png';
import NavBar from '../../Shared/NavBar/NavBar';
import './Header.css'
import Fade from 'react-reveal/Fade';

const Header = () => {
    return (
        <section className="header">
            <NavBar />
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-7 titleArea">
                        <Fade duration={2000} left>
                            <p className="miniTitle">Data Science Consulting Services</p>
                            <h1 className="headerTitle">Managed Analytics and <span className="headerHighlight">Data Analysis Platform</span></h1>
                            <p className="headerContent">We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                            <a href="#services" className="fadeInRight"><button className="bradBtn">Get Started</button></a>
                      
                        </Fade>
                    </div>
                    <Fade duration={2000} right>
                        <div className="col-md-5 img">
                            <img src={`${banner}`} alt="" className="img-fluid"/>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default Header;