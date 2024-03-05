import React from "react";

export default function ContactForm({
  handleFormSubmission,
  userData,
  setUserData,
}) {
  return (
    <form className="col-12 col-md-6" onSubmit={handleFormSubmission}>
      <div className="row g-3">
        {/* First Name */}
        <div className="col-sm-6">
          <div className="mb-1">
            <label htmlFor="firstNameInput" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstNameInput"
              placeholder="Jane"
              onChange={(event) =>
                setUserData({ ...userData, firstName: event.target.value })
              }
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="col-sm-6">
          <div className="mb-1">
            <label htmlFor="lastNameInput" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastNameInput"
              placeholder="Doe"
              onChange={(event) =>
                setUserData({ ...userData, lastName: event.target.value })
              }
            />
          </div>
        </div>

        {/* Email */}
        <div className="col-12">
          <div className="mb-1">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="example@email.com"
              onChange={(event) =>
                setUserData({ ...userData, email: event.target.value })
              }
            />
          </div>
        </div>

        {/* Message */}
        <div className="col-12 mb-1">
          <label htmlFor="messageTextArea" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="messageTextArea"
            rows={3}
            onChange={(event) =>
              setUserData({ ...userData, message: event.target.value })
            }
          ></textarea>
        </div>

        {/* Submit */}
        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
