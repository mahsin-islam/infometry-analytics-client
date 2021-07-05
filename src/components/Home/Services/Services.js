
import './Services.css';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([])
    
    // useEffect(() => {
    //     axios.get('https://whispering-fortress-28180.herokuapp.com/services')
    //     .then(res => setServices(res.data))
    // }, [services])

    useEffect(() => {
        fetch('https://whispering-fortress-28180.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [services])

    return (
        <section id="services" className="services">
            <h4 className="miniTitle text-center">SERVICES</h4>
            <div className="text-center">
                <h5 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h5>
            </div>
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <div className="row mt-4 container mx-auto justify-content-center">
                {
                    services?.map(service => <ServiceDetails key={service._key} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;