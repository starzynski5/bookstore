"use client"

import React, { useState } from 'react'
import { validateExistingUser } from '../validators/authSchemas';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        const validateResult = validateExistingUser(email, password);

        if (validateResult !== "Success") {
            setErrorMessage(validateResult);
            setError(true);
            return;
        }

        setError(false);
        setErrorMessage("");

        const response = await axios.post("/api/auth/login", {
            email,
            password,
        });

        const data = await response.data;

        if (response.status !== 200){
            setErrorMessage(data.error);
            setError(true);
        }

        router.push("/dashboard");
    }
    
    return (
        <>
            <div className='row'>
                <div className='col-11 col-md-6 col-lg-4 mx-auto my-5'>
                    <h2 className='mb-4'>Login to your account</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <a type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</a>
                    </form>
                    <a href="/sign-up" className='d-block mt-3'>Don't have an account? Sign up here.</a>
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
