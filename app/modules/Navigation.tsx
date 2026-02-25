"use client";

import React, { useEffect, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('isLoggedIn='));
    if (cookieValue) {
      const value = cookieValue.split('=')[1];
      setIsLoggedIn(value === 'true');
      setChecked(true);
    } else {
      setIsLoggedIn(false);
      setChecked(true);
    }
  }, [])
  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 px-5">
      <a className="navbar-brand" href="/">BookStore</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" href="/discovery">Discovery</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" href="/categories">Categories</a>
          </li>
        </ul>

        {
          checked ? (
            isLoggedIn ? (
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/dashboard">Dashboard</a>
              </li>
            </ul>
          ) : (
            <form className="d-flex">
              <a className="btn btn-success" href="/sign-in">Login</a>
            </form>
          )
          ) : (
            <ThreeDot size="small" color="#000" textColor="" />
          )
        }

      </div>
    </nav>
  )
}

export default Navigation
