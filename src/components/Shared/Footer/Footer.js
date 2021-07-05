import React from 'react';
import './Footer.css';
import footerMap from '../../../images/footer-map.png';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMapMarker, faPhoneAlt, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer className="footer-area bg-color" style={{backgroundColor:'#fbf3e1'}}>
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-6">
							<div className="single-footer-widget">
                            <img src={logo} alt="logo" style={{ width: '10rem', height:'4rem' }} className="logo" />
								<p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
								<ul className="social-link">
									<li><a className="d-block" target="_blank" rel="noreferrer" href="/"><FontAwesomeIcon icon={faFacebook}/></a></li>
									<li><a className="d-block" target="_blank" rel="noreferrer" href="/">
                                    <FontAwesomeIcon icon={faInstagram}/></a></li>
									<li><a className="d-block" target="_blank" rel="noreferrer" href="/"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
									<li><a className="d-block" target="_blank" rel="noreferrer" href="/"><FontAwesomeIcon icon={faTwitter}/></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-sm-6">
							<div className="single-footer-widget pl-5">
								<h3>Explore</h3>
								<ul className="footer-links-list">
									<li><a href="/">Home</a></li>
									<li><a href="/about-us">About</a></li>
									<li><a href="/case-studies">Case Studies</a></li>
									<li><a href="/blog">Our Blog</a></li>
									<li><a href="/contact">Contact</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-sm-6">
							<div className="single-footer-widget">
								<h3>Resources</h3>
								<ul className="footer-links-list">
									<li><a href="/team">Our Scientists</a></li>
									<li><a href="/services">Our Services</a></li>
									<li><a href="/testimonials">Testimonials</a></li>
									<li><a href="/services">SaaS Solutions</a></li>
									<li><a href="/case-studies">Case Studies</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6">
							<div className="single-footer-widget">
								<h3>Address</h3>
								<ul className="footer-contact-info">
									<li><FontAwesomeIcon icon={faMapMarker}/> 175 5th Ave, Gr. Washinton, GW 1010,
										<br /> United States</li>
									<li><FontAwesomeIcon icon={faPhoneAlt}/> <a href="tel:+4458715111">+1 (123) 456 4444</a></li>
									<li> <FontAwesomeIcon icon={faEnvelope}/> info@infometry.com</li>
									<li><FontAwesomeIcon icon={faFax}/> <a href="tel:+55785445666">+55 785 45778952</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-bottom-area">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6">
								<p>Copyright @{(new Date()).getFullYear()}
									<strong> INFOMETRY ANALYTICS</strong> All rights reserved </p>
							</div>
							<div className="col-lg-6 col-md-6">
								<ul>
									<li><a href="/privacy-policy">Privacy Policy</a></li>
									<li><a href="/terms-of-service">Terms &amp; Conditions</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-map"><img src={footerMap} alt="footer-logo" /></div>
			</footer>
    );
};

export default Footer;