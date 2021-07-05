import React from 'react';
import './DataScientist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import scientistOne from '../../../images/scientist-1.png';
import scientistTwo from '../../../images/scientist-2.png';
import scientistThree from '../../../images/scientist-3.png';
import scientistFour from '../../../images/scientist-4.png';

const DataScientist = () => {
    return (
        <section className="scientist-area bg-color pt-100 pb-70">
				<div className="container">
					<div className="section-title text-center">
                        <h4 class="miniTitle">TEAM MEMBERS</h4>
                        <h5 class="sectionTitle">OUR DATA SCIENTIST</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
					</div>
					<div className="row">
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-scientist-box">
								<div className="image"><img src={scientistOne} alt="banner" /></div>
								<div className="content">
									<h3>Merv Adrian</h3><span>Data Management</span>
									<ul className="social">
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faFacebook}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faTwitter}/></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-scientist-box">
								<div className="image"><img src={scientistTwo} alt="banner" /></div>
								<div className="content">
									<h3>Kirk Borne</h3><span>Data Scientist</span>
									<ul className="social">
                                    <li><a className="d-block" href="/"><FontAwesomeIcon icon={faFacebook}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faTwitter}/></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-scientist-box">
								<div className="image"><img src={scientistThree} alt="banner" /></div>
								<div className="content">
									<h3>Carla Gentry</h3><span>Analytical Solutions</span>
									<ul className="social">
                                    <li><a className="d-block" href="/"><FontAwesomeIcon icon={faFacebook}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faTwitter}/></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-scientist-box">
								<div className="image"><img src={scientistFour} alt="banner" /></div>
								<div className="content">
									<h3>Marie Curie</h3><span>Data Scientist</span>
									<ul className="social">
                                    <li><a className="d-block" href="/"><FontAwesomeIcon icon={faFacebook}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
										<li><a className="d-block" href="/"><FontAwesomeIcon icon={faTwitter}/></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    );
};

export default DataScientist;