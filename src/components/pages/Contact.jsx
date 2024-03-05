import React from "react";
import { useState } from "react";
import ContactForm from "../ContactForm";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [smile, setSmile] = useState(":)");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(userData);

    if (userData.firstName !== "") {
      setFormSubmitted(() => true);
    }
  };

  return (
    <>
      <div className="container mb-5">
        <h1 className="col-12 display-5 fw-bold text-body-emphasis text-center my-5">
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
    </>
  );
}
