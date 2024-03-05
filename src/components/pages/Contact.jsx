import React from "react";
import { useState } from "react";
import ContactForm from "../ContactForm";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [smile, setSmile] = useState(":)");
  const [formErrors, setFormErrors] = useState([]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(userData);

    validateForm();
  };

  const validateForm = () => {
    const validationErrors = [];

    if (userData.firstName === "") {
      validationErrors.push("First name cannot be blank.");
    }

    if (userData.lastName === "") {
      validationErrors.push("Last name cannot be blank.");
    }

    if (userData.email === "") {
      validationErrors.push("Email cannot be blank.");
    }

    if (userData.message === "") {
      validationErrors.push("Message cannot be blank.");
    }

    if (validationErrors.length === 0) {
      setFormSubmitted(true);
    }

    setFormErrors(validationErrors);
  };

  return (
    <>
      <div className="container mb-5">
        <h1 className="col-12 display-5 fw-bold text-center my-5">
          Contact Me
        </h1>

        <p className="text-center p-3">
          View my CV <a href="/James Stott Web Development CV.pdf">here</a>.
        </p>

        {formSubmitted === false ? (
          <div className="row">
            <ContactForm
              handleFormSubmission={handleFormSubmission}
              userData={userData}
              setUserData={setUserData}
            />
            <div
              className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center"
              onMouseEnter={() => setSmile("(:")}
              onMouseLeave={() => setSmile(":)")}
            >
              <h3>{smile}</h3>
            </div>
          </div>
        ) : (
          <p className="text-center">
            Thank you for your submission, {userData.firstName}.
          </p>
        )}
      </div>

      {formErrors.length > 0 && (
        <div className="container text-danger">
          <ul>
            {formErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
