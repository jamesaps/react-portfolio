import React from "react";
import { Link } from "react-router-dom";

export default function HomeJumbotron() {
  return (
    <div className="container position-absolute top-50 start-50 translate-middle">
      <div className="p-5 text-center bg-body-secondary rounded-3">
        <div className="row">
          <div className="col-12 col-sm-8">
            <h1 className="text-body-emphasis mt-5">James Stott's Portfolio</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
              Welcome to my web development portfolio. Please take the time to
              view all of my proudest creations in the Gallery.
            </p>
            <div className="d-inline-flex gap-2 mb-5">
              <Link
                to="gallery"
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              >
                Gallery
              </Link>
              <Link
                to="contact"
                className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-4 order-first order-sm-last d-flex align-items-center justify-content-center">
            <img
              style={{ maxWidth: "100%", maxHeight: "300px" }}
              src="/me.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
