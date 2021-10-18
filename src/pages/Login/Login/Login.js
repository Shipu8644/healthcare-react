import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
const Login = () => {
    const { signInGoogle } = useAuth();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const history = useHistory();

    const manageRedirectory = () => {
        signInGoogle()
            .then(() => {
                history.push(redirect);
            })
    }

    return (
        <div className="login  mt-5 mb-5  ">
            <h1 className='text-info'>Login Here</h1>
            <div>
                <input type="email" name="" id="" placeholder="Enter your email" />
                <br />
                <input type="password" name="" id="" placeholder="Enter your password" />
                <br />
                <br />

                <button className='bg-info rounded text-white' style={{ width: "50%" }}>Sign In </button>
                <br />
                <br />
                <button onClick={manageRedirectory} className='bg-info rounded text-white' style={{ width: "50%" }}>Sign In With Goolge</button>
                <br />
                <br />
                <NavLink to='/registration'>
                    <p>New in account?</p>
                </NavLink>


            </div>


        </div>
    );
};

export default Login;