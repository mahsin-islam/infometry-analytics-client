import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ContactUs.css';
import contactImg from '../../../images/contact-us.svg';
import swal from 'sweetalert'
import Fade from 'react-reveal/Fade';

const ContactUs = () => {
    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        swal("Thank You!", "We appreciate you contacting us!", "success");
    }
    return (
        <section id="contact" style={{ backgroundColor: '#EEEEEE' }}>
            <Col md={11} className="mx-auto">
                <Row>
                    <Col md={6}>
                        <Fade duration={2000} left >
                            <img src={`${contactImg}`} alt="" className="img-fluid" />
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade duration={2000} right>
                            <form onSubmit={handleSubmit} className="contactForm">
                                <h4 className="miniTitle">CONTACT US</h4>
                                <h5 className="sectionTitle">GET IN TOUCH</h5>
                                <Row>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Name" type="text" required />
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <input placeholder="Your Email" type="email" required />
                                    </Col>
                                    <Col md={12}>
                                        <input placeholder="Subject" type="text" required />
                                    </Col>
                                    <Col md={12}>
                                        <textarea placeholder="Your Message..." required></textarea>
                                    </Col>
                                </Row>
                                {/* <button className="brandBtn" type="submit">Submit Now</button> */}
                                <a href="#services" className="fadeInRight"><button className="bradBtn" type="submit">Contact Now</button></a>
                            </form>
                        </Fade>
                    </Col>

                </Row>
            </Col>
        </section>
    );
};

export default ContactUs;