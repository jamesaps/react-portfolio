import React from "react";

export default function GalleryProjectCard({ project }) {
  return (
    <div className="col">
      <div className="card h-100">
        <div
          className="card-img-top gallery-project-card-image"
          style={{ backgroundImage: `url(${project.img.src})` }}
        ></div>
        <div className="card-body gallery-project-card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
