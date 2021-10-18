import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="rounded  ">
            <Col className='shadow mb-4'> <img style={{ width: "400px", height: '200px', borderRadius: '10px' }} src={img} alt="" /></Col>
            <Col ><h4>{name}</h4></Col>
            <Col><small>{description}</small></Col>

            <NavLink to={`detail/${id}`}>
                <Col><button className='mt-3 rounded bg-info text-white border border-white fs-5'>Details</button></Col>
            </NavLink>
        </div>
    );
};

export default Service;