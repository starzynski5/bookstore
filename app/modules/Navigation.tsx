import React from 'react'

const Navigation = () => {
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

        <form className="d-flex">
          <button className="btn btn-success">Login</button>
        </form>

      </div>
    </nav>
  )
}

export default Navigation
