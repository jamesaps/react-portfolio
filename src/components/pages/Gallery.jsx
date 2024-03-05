import React from "react";
import galleryProjectData from "./../../assets/projects.json";
import GalleryProjectCard from "../GalleryProjectCard";

export default function Gallery() {
  return (
    <div className="container">
      <h1 className="display-5 fw-bold text-body-emphasis text-center my-5">
        Gallery
      </h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {galleryProjectData.map((galleryProject) => (
          <GalleryProjectCard
            project={galleryProject}
            key={galleryProject.id}
          />
        ))}
      </div>
    </div>
  );
}
