import React from "react";
import "../assets/CSS/CompanyContact.css";

function CompanyContact() {
  return (
    <div className="contact-container">
      <h1 className="contact-header">All Company Contact Information</h1>
      <div className="contact-info">
        <h2>Phone:</h2>
        <p>+251909090909</p>
        <h2>Email:</h2>
        <p>
          <a href="mailto:xyz@gmail.com">xyz@gmail.com</a>
        </p>
        <p>
          <a href="mailto:xyz2@gmail.com">xyz2@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default CompanyContact;
