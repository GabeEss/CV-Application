import React, { Component } from "react";
// import uniqid from 'uniqid';
import Overview from "./Overview";
import Personal from "./Personal-Info";
import Experience from "./Experience";
import Education from "./Education";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personalInfo: { 
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: ''
      },
      experience: {
        position: '',
        company: '',
        city: '',
        country: '',
        startYear: '',
        endYear: ''
      },
      education: {
        institutionName: '',
        city: '',
        country: '',
        degree: '',
        majorSubject: '',
        startYear: '',
        endYear: ''
      },
      tasks: [],
    };

    // Didn't use an arrow function in the render method, so handleReset needs binding.
    this.handleReset = this.handleReset.bind(this);
  }


  // This method changes the text inside the input fields of the form when the user types.
  // 'e' is the event, e.target is the element.
  // 'section' is a string. It is equivalent to one of the properties declared in the constructor.
  // First this function takes the name and value from the input element (declared in jsx/html)
  // and intializes them as variables.
  // Then we call setState and pass the previous state (object) into it. In the string
  // called 'section' which was passed into this method, we use the spread operator:
  // '...prevState[section]' to copy all the contents of the previous state (object).
  // Note that the wording in 'section' must correspond to a property in this.state in the constructor.
  // The one thing that gets changed is a subproperty of the section, which corresponds
  // to the name value, which was destructured from e.target. If it does not, you need to
  // look at the jsx(html) in the render method and make sure the input element's 'name' value
  // corresponds to the subproperties initialized by this.state in your constructor, otherwise
  // the value in those subproperties won't be updated. AGAIN, The input element's 'name' is not what
  // changes, the element's name (declared in jsx in the render method) is only supposed to match the
  // subproperties initialized by the constructor in this.state,
  // the properties of the state are what get updated in this method.
  handleChange = (e, section) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      [section]: {
        ...prevState[section],
        [name]: value
      }
    }));
  } 

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      tasks: [],
      personalInfo: { 
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: ''
      },
      experience: {
        position: '',
        company: '',
        city: '',
        country: '',
        startYear: '',
        endYear: ''
      },
      education: {
        institutionName: '',
        city: '',
        country: '',
        degree: '',
        majorSubject: '',
        startYear: '',
        endYear: ''
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    const { personalInfo, experience, education } = this.state;
    this.setState({
      tasks: [
        ...this.state.tasks,
        { personalInfo, experience, education }
      ],
      personalInfo: { 
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: ''
      },
      experience: {
        position: '',
        company: '',
        city: '',
        country: '',
        startYear: '',
        endYear: ''
      },
      education: {
        institutionName: '',
        city: '',
        country: '',
        degree: '',
        majorSubject: '',
        startYear: '',
        endYear: ''
      }
    })
  }

  // If the tasks property is not empty, render the CV, else render the form.
  render() {
    const { tasks } = this.state;
    if (tasks.length > 0) {
      return (
        <div>
          <Overview tasks={tasks} />
          <button onClick={this.handleReset}>
              Reset
            </button>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.onSubmitTask}>
            <h2>Personal Information</h2>
              <Personal personalInfo={this.state.personalInfo} handleChange={this.handleChange} />
            <h2>Relevant Experience</h2>
              <Experience experience={this.state.experience} handleChange={this.handleChange} />
            <h2>Education</h2>
              <Education education={this.state.education} handleChange={this.handleChange} />
            <button type="submit">
              Submit CV
            </button>
            <button onClick={this.handleReset}>
              Reset
            </button>
          </form>
        </div>
      );
    }
  }
};

export default App;