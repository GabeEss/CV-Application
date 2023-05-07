import React from "react";
import './Overview.css';

const Overview = (props) => {
  const { personalInfo, experience, education } = props.tasks[0];

  return (
    <div id='application'>
        <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
        <div>
            <div className="cv-field">
              <label>Address: </label>
              <p>{personalInfo.address}</p>
            </div>
            <div className="cv-field">
              <label>Phone Number: </label>
              <p>{personalInfo.phoneNumber}</p>
            </div>
            <div className="cv-field">
              <label>Email: </label>
              <p>{personalInfo.email}</p>
            </div>
            <div className="cv-field">
              <label>Description: </label>
              <p>{personalInfo.description}</p>
            </div>
        </div>
        <h2>Experience</h2>
          <div>
            <div className="cv-field">
              <label>Position: </label>
              <p>{experience.position}</p>
            </div>
            <div className="cv-field">
              <label>Company: </label>
              <p>{experience.company}</p>
            </div>
            <div className="cv-field">
              <label>Location: </label>
              <p>{experience.city}, {experience.country}</p>
            </div>
            <div className="cv-field">
              <label>Years of Service: </label>
              <p>{experience.startYear} - {experience.endYear}</p>
            </div>
          </div>
        <h2>Education</h2>
          <div>
            <div className="cv-field">
              <label>Degree: </label>
              <p>{education.degree}</p>
            </div>
            <div className="cv-field">
              <label>Major: </label>
              <p>{education.majorSubject}</p>
            </div>
            <div className="cv-field">
              <label>Institution: </label>
              <p>{education.institutionName}</p>
            </div>
            <div className="cv-field">
              <label>Location: </label>
              <p>{education.city}, {education.country}</p>
            </div>
            <div className="cv-field">
              <label>Years of Schooling: </label>
              <p>{education.startYear} - {education.endYear}</p>
            </div>
          </div>
    </div>
  );
};

export default Overview;