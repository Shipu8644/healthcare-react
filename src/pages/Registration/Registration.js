import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Login/Firebase/firebase.init';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router';

initializeAuthentication();
const Registration = () => {
    const auth = getAuth();
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const history = useHistory();
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
        registerNewUser(email, password);
    }


    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                const user = result.user;
                console.log(user);
                setUser(user);
                setError('');
                setUserName();
            })

            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {

        }).catch((error) => {

        });
        alert('Registration Successful!! Now you can login')
        history.push('/login');
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

