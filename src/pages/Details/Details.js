import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Details = () => {
    const { id } = useParams();
    const [services, setServices] = useServices();
    const [matchService, setmatchService] = useState({});
    const idInt = parseInt(id);

    useEffect(() => {
        setmatchService(services.find(service => service.id === idInt));
    }, [services, idInt])
    console.log(matchService);

    return (
        <div className='mt-5'>
            {id}
        </div>
    );
};

export default Details;