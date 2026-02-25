"use client"

import React, { useState } from 'react'

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <a href="/sign-up" className='d-block mt-3'>Don't have an account? Sign up here.</a>
                </div>
            </div>
        </>
    )
}

export default RegisterForm
