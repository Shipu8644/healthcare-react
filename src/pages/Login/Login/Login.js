import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.init';
import { Form } from 'react-bootstrap';
// initializeAuthentication();
const Login = () => {
    const { processLogIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const history = useHistory();

    //getEmail
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    //    getpassword
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(email, password);
        console.log(password.length);
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase letter');
            return;
        }
        processLogIn(email, password)
            .then(() => {
                history.push(redirect);
            })
    }


    const manageRedirectory = () => {
        signInGoogle()
            .then(() => {
                history.push(redirect);
            })
    }


    return (
        <Form onSubmit={handleSignUp} className="login  mt-5 mb-5  ">
            <h1 className='text-info'>Login Here</h1>
            <div>
                <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Enter your email" required />
                <br />
                <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter your password" required />
                <br />
                <p className="text-danger">{error}</p>
                <br />

                <button type='submit' className='bg-info rounded text-white' style={{ width: "50%" }}>Sign In </button>
                <br />
                <br />
                <button onClick={manageRedirectory} className='bg-info rounded text-white' style={{ width: "50%" }}>Sign In With Google</button>
                <br />
                <br />
                <NavLink to='/registration'>
                    <p>New in account?</p>
                </NavLink>

            </div>
        </Form>
    );
};

export default Login;