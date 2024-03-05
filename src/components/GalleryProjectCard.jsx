import React from "react";

export default function GalleryProjectCard({ project }) {
  return (
    <div className="col">
      <div className="card">
        <img
          src={project.img.src}
          className="card-img-top"
          alt={project.img.alt}
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
