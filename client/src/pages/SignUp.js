import React, { useState } from 'react';

/* whoever is dealing with controller aspect, please update
import { useMutation } from '@apollo/client';
import {ADD_USER} from '../utils/mutations'; */

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' })

   //controller please attend to 
    // const [addUser, {error}] = useMutation(ADD_USER);

    //updates state based on form input changes
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required to sign-up.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    }

    //submitting form function
    const handleSubmit = async (e) => {
        e.preventDefault();

        // try/catch statement

        //once add_user query is made, please uncomment
        // try {
        //     const { data } = await addUser({
        //         variables: { ...formState }
        //     });

        //     Auth.login(data.addUser.token);
        // } catch (e) {
        //     console.log(e);
        // }
    };

    return (
        <form id="signup-form" className="card my-3 col-5" onSubmit={handleSubmit}>
            <h3 className="card-header">Sign-Up</h3>
            <div className="my-2 mx-4">
                <label htmlFor="email" className="form-label"> Email:</label>
                <input name="email" value={formState.email} onChange={handleChange} className="form-control" type="email" placeholder="Email..."></input>
            </div>
            <div className="my-2 mx-4">
                <label htmlFor="username" className="form-label"> Username:</label>
                <input name="username" value={formState.username} onChange={handleChange} className="form-control" type="text" placeholder="Username..."></input>
            </div>
            <div className="my-2 mx-4">
                <label htmlFor="password" className="form-label">Password:</label>
                <input name="password" value={formState.password} onChange={handleChange} className="form-control" type="password" placeholder="Password..."></input>
            </div>
            <div>
                <button type="submit" className="btn btn-primary my-2" style={{ width: "25%" }}> Sign-Up!</button>
            </div>
            {error && (
                <div>
                    Signup Failed
                </div>
            )}
        </form>

    )
}