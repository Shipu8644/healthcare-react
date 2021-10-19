import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Registration = () => {

    const { registerNewUser, setUserName } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';

    //    getname
    const handleNameChange = e => {
        setName(e.target.value);
    }

    //    getemail
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    //    getpassword
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(email, password, name);
        console.log(password.length);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase letter');
            return;
        }
        registerNewUser(email, password)
            .then(() => {
                history.push(redirect);
                setUserName(name);
            })
            .catch((error) => {
                setError(error.message);
            })

    }


    return (
        <Form onSubmit={handleSignUp} className='login  mt-5 mb-5'>
            <h1 className='text-info mt-5'>Sign Up Here</h1>
            <div>
                <input onBlur={handleNameChange} type="text" name="" id="" placeholder='Enter your name' required />
                <br />
                <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Enter your email" required />
                <br />
                <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder=" Enter your Password" required />
                <br />
                <p className="text-danger">{error}</p>
                <br />

                <button type="submit" className='bg-info rounded text-white' style={{ width: "50%" }}>Sign Up </button>
                <br />
                <br />
                <NavLink to='/login'>
                    <p> Already have account?</p>
                </NavLink>

            </div>

        </Form>
    );
};

export default Registration;

