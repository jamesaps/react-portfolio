import React, { useEffect, useRef } from "react";
import { useState } from "react";
import galleryProjectData from "./../../assets/projects.json";
import GalleryProjectCard from "../GalleryProjectCard";
import GalleryProjectModal from "../GalleryProjectModal";
import { AnimatePresence, LayoutGroup } from "framer-motion";

export default function Gallery() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const modalRef = useRef(null);

  const scrollToModal = () =>
    modalRef.current.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });

  useEffect(() => {
    if (modalRef.current !== null) scrollToModal();
  }, [selectedProjectId]);

  const selectedProject =
    selectedProjectId !== null &&
    galleryProjectData.find(
      (galleryProject) => galleryProject.id === selectedProjectId
    );

  return (
    <>
      <div className="container mb-5">
        <h1 className="display-5 fw-bold text-center my-5">Gallery</h1>

        <div className="position-relative pt-3">
          <LayoutGroup>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {galleryProjectData.map((galleryProject) => (
                <GalleryProjectCard
                  project={galleryProject}
                  key={galleryProject.id}
                  selectedProjectId={selectedProjectId}
                  setSelectedProjectId={setSelectedProjectId}
                />
              ))}
            </div>

            {selectedProjectId !== null && (
              <AnimatePresence>
                <GalleryProjectModal
                  project={selectedProject}
                  setSelectedProjectId={setSelectedProjectId}
                  modalRef={modalRef}
                />
              </AnimatePresence>
            )}
          </LayoutGroup>
        </div>
      </div>
    </>
  );
}
