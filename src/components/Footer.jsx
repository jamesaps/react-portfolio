import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="my-2">
      <div className="container py-1 border-top">
        <ul className="d-flex flex-row justify-content-center list-unstyled gap-3 pt-3 text-secondary">
          <li>
            <a href="https://github.com/jamesaps" className="social-media-icon">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/japstott/"
              className="social-media-icon"
            >
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/james-stott-15815ba8/"
              className="social-media-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitch.tv/jamessaysdance"
              className="social-media-icon"
            >
              <FontAwesomeIcon icon={faTwitch} size="2xl" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
