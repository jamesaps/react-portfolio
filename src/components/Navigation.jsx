import React from "react";
import { NavLink } from "react-router-dom";

// This functions as the header component that will be rendered across the entire site.
export default function Navigation(props) {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          {/* Add active class to navigation element if it is the currently navigated page in react router */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="gallery"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
