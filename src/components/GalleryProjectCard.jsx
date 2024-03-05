import React from "react";
import { motion } from "framer-motion";

export default function GalleryProjectCard({
  project,
  selectedProjectId,
  setSelectedProjectId,
}) {
  return (
    <motion.div
      className="col"
      layoutId={`${project.id}`}
      onClick={() =>
        selectedProjectId === null && setSelectedProjectId(project.id)
      }
    >
      <motion.div className="card h-100 gallery-project-card">
        <motion.div
          className="card-img-top gallery-project-card-image"
          style={{ backgroundImage: `url(${project.img.src})` }}
          layoutId={`image-${project.id}`}
        ></motion.div>
        <motion.div className="card-body gallery-project-card-body">
          <motion.h5 className="card-title" layoutId={`title-${project.id}`}>
            {project.title}
          </motion.h5>
          <motion.p
            className="card-text"
            layoutId={`description-${project.id}`}
          >
            {project.shortDescription}
          </motion.p>
          <motion.div layoutId={`close-${project.id}`} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
