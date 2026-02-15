'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">

        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <span className="bg-warning p-2 rounded">📚</span> BookStore
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/explore" className="nav-link">Explore</Link>
            </li>
            <li className="nav-item">
              <Link href="/library" className="nav-link">My Library</Link>
            </li>
            <li className="nav-item">
              <Link href="/favorites" className="nav-link">Favorites</Link>
            </li>
            <li className="nav-item">
              <Link href="/trending" className="nav-link">Trending</Link>
            </li>
          </ul>

          <div className="d-flex">
            <button className="btn btn-warning text-dark">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
