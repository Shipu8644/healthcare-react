import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useServices();
    return (
        <Container className='mt-5 mb-5'>
            <h1 className='text-info mb-3 '>Pediatric Services </h1>
            <Row id='services' className='row' xs={1} md={3} lg={3} className="gy-4 gx-5" >
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </Row>
        </Container>
    );
};

export default Services;