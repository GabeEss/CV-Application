import React from "react";

const Overview = (props) => {
  const { personalInfo, experience, education } = props.tasks[0];

  return (
    <div id='cv-application'>
        <div id='cv-personal'>
            <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
            <p>{personalInfo.address}</p>
            <p>{personalInfo.phoneNumber}</p>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.description}</p>
        </div>
        <div>
        <h2>Experience</h2>
          <h3>{experience.position}</h3>
          <p>{experience.company}</p>
          <p>{experience.city}, {experience.country}</p>
          <p>{experience.startYear} - {experience.endYear}</p>
        </div>
        <div>
        <h2>Education</h2>
          <h3>{education.degree} in {education.majorSubject}</h3>
          <p>{education.institutionName}</p>
          <p>{education.city}, {education.country}</p>
          <p>{education.startYear} - {education.endYear}</p>
        </div>
    </div>
  );
};

export default Overview;