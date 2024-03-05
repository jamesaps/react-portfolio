import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function GalleryProjectModal({
  project,
  setSelectedProjectId,
  modalRef,
}) {
  const handleClose = () => {
    setSelectedProjectId(null);
  };

  return (
    <>
      <motion.div className="gallery-project-modal-overlay w-100 h-100 position-absolute top-0 start-0 rounded-4">
        <motion.div
          layoutId={`${project.id}`}
          ref={modalRef}
          className="card shadow-lg position-absolute w-75 p-3 top-50 start-50 translate-middle rounded-3"
        >
          <motion.div
            className="gallery-project-modal-close position-absolute"
            layoutId={`close-${project.id}`}
            onClick={handleClose}
          >
            <FontAwesomeIcon icon={faCircleXmark} size="lg" />
          </motion.div>
          <motion.h2
            className="display-4 text-center"
            layoutId={`title-${project.id}`}
          >
            {project.title}
          </motion.h2>
          <motion.div className="row d-flex flex-row w-100 h-100">
            <motion.div
              className="col-12 col-lg-6 p-3"
              layoutId={`image-${project.id}`}
            >
              <img src={project.img.src} className="w-100" />
            </motion.div>
            <motion.div
              className="col-12 col-lg-6 p-3"
              layoutId={`description-${project.id}`}
            >
              <motion.h3>Description</motion.h3>
              <motion.div>{project.description}</motion.div>

              <div class="d-flex justify-content-around mt-3">
                {project.repo !== null && (
                  <a href={project.repo} className="gallery-project-modal-link">
                    Repository
                  </a>
                )}

                {project.deployed !== null && (
                  <a
                    href={project.deployed}
                    className="gallery-project-modal-link"
                  >
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
