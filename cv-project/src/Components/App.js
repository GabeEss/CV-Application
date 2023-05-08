import React, { useState, useEffect } from "react";
import './App.css';
// import uniqid from 'uniqid';
import Overview from "./Overview";
import Personal from "./Personal-Info";
import Experience from "./Experience";
import Education from "./Education";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  });

  const [experience, setExperience] = useState({
    position: "",
    company: "",
    city: "",
    country: "",
    startYear: "",
    endYear: "",
  });

  const [education, setEducation] = useState({
    institutionName: "",
    city: "",
    country: "",
    degree: "",
    majorSubject: "",
    startYear: "",
    endYear: "",
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (e, section) => {
    const { name, value } = e.target;

    switch (section) {
      case "personalInfo":
        setPersonalInfo((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case "experience":
        setExperience((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      case "education":
        setEducation((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        break;
      default:
        break;
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTasks([]);
    setPersonalInfo({
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    });
    setExperience({
      position: "",
      company: "",
      city: "",
      country: "",
      startYear: "",
      endYear: "",
    });
    setEducation({
      institutionName: "",
      city: "",
      country: "",
      degree: "",
      majorSubject: "",
      startYear: "",
      endYear: "",
    });
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        personalInfo,
        experience,
        education,
      },
    ]);
    setPersonalInfo({
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    });
    setExperience({
      position: "",
      company: "",
      city: "",
      country: "",
      startYear: "",
      endYear: "",
    });
    setEducation({
      institutionName: "",
      city: "",
      country: "",
      degree: "",
      majorSubject: "",
      startYear: "",
      endYear: "",
    });
  };

  if (tasks.length > 0) {
      return(
        <div id="cv-application">
          <Overview tasks={tasks} />
          <button onClick={handleReset}>
              Reset
            </button>
        </div>
      );
    } else {
      return(
        <div>
          <h1>CV Creator</h1>
          <form className="user-form" onSubmit={onSubmitTask}>
            <h2>Personal Information</h2>
              <Personal personalInfo={personalInfo}
              handleChange= {(e) => handleChange(e, "personalInfo")}/>
            <h2>Relevant Experience</h2>
              <Experience experience={experience}
              handleChange= {(e) => handleChange(e, "experience")} />
            <h2>Education</h2>
              <Education education={education}
              handleChange= {(e) => handleChange(e, "education")} />
            <div className="button-group">
              <button type="submit">
                Submit CV
              </button>
              <button onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      );
    }
}
export default App;