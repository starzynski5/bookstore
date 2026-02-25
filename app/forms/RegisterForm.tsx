"use client"

import React, { useState } from 'react'
import { validateNewUser } from '../validators/authSchemas';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        const validateResult = validateNewUser(username, email, password, repassword);

        if (validateResult !== "Success") {
            setErrorMessage(validateResult);
            setError(true);
            return;
        }

        setError(false);
        setErrorMessage("");

        console.log(username, password, email)

        const response = await axios.post("/api/auth/register", {
            username,
            email,
            password,
            repassword
        });

        const data = await response.data;

        if (response.status !== 200){
            setErrorMessage(data.error);
            setError(true);
        }

        console.log("JWT" + data.token);
    }
    
    return (
        <>
            <div className='row'>
                <div className='col-11 col-md-6 col-lg-4 mx-auto my-5'>
                    <h2 className='mb-4'>Create an account</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="repassword" className="form-label">Re-enter Password</label>
                            <input type="password" className="form-control" id="repassword" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                        </div>
                        <a className="btn btn-primary" onClick={handleSubmit}>Submit</a>
                    </form>
                    <a href="/sign-in" className='d-block mt-3'>Already have an account? Sign in here.</a>
                    {
                        error ? (
                            <div className='alert alert-danger mt-4'>{errorMessage}</div>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default RegisterForm
