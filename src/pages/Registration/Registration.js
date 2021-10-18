import React from 'react';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='login  mt-5 mb-5'>
            <h1 className='text-info'>Sign Up Here</h1>
            <div>
                <input type="text" name="" id="" placeholder='Enter your name' />
                <br />
                <input type="email" name="" id="" placeholder="Enter your email" />
                <br />
                <input type="password" name="" id="" placeholder=" Enter your Password" />
                <br />
                <br />

                <button className='bg-info rounded text-white' style={{ width: "50%" }}>Sign Up </button>
                <br />
                <br />
                <button className='bg-info rounded text-white' style={{ width: "50%" }}>Sign In With Goolge</button>
                <br />
                <br />
                <NavLink to='/login'>
                    <p> Already have account?</p>
                </NavLink>


            </div>

        </div>
    );
};

export default Registration;