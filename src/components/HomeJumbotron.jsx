import React from "react";
import { Link } from "react-router-dom";

export default function HomeJumbotron() {
  return (
    <div className="container position-absolute top-50 start-50 translate-middle">
      <div
        id="home-jumbotron"
        className="p-5 text-center bg-body-secondary rounded-3"
      >
        <h1 className="display-3 fw-bold">James Stott's Portfolio</h1>
      </div>
      <div className="row mt-3 p-2">
        <div className="col-12 col-sm-8 d-flex flex-column justify-content-center">
          <p className="welcome-text col-lg-8 mx-auto fs-5">
            Welcome to my web development portfolio. Please take some time to
            view all of my proudest creations in the Gallery.
          </p>
        </div>

        <div className="col-12 col-sm-4 order-first order-sm-last d-flex align-items-center justify-content-center">
          <img
            style={{ maxWidth: "100%", maxHeight: "300px" }}
            src="/me.jpg"
            className="rounded-3"
          />
        </div>
      </div>
    </div>
  );
}
