import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const firebase = useFirebase();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/" aria-current="page">
                <FaHome />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userform">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="logout_btn btn btn-outline-none"
                onClick={() => firebase.logout()}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
