import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Shipu8644/healthcare-react/main/public/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [
        services,
        setServices
    ]

}
export default useServices;