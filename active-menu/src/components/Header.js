import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


export default function Header() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
            <ul className="navbar-nav">
              <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "nav-link text-light btn btn-primary" : "nav-link" )} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "nav-link text-light btn btn-primary" : "nav-link" )} to="/about">About</NavLink>                  
              </li>
              <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? "nav-link text-light btn btn-primary" : "nav-link" )} to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
