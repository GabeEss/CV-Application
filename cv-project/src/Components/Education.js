import React from "react";
import './Form.css';

const Education = (props) => {
    const { education } = props;

    return (
        <div id="education">
            <input 
                  onChange={(e) => props.handleChange(e, "education")}
                  value={education.institutionName}
                  type="text"
                  name="institutionName"
                  placeholder="Institution name"
                  className="input-field"
                />
            <input 
                onChange={(e) => props.handleChange(e, "education")}
                value={education.city}
                type="text"
                name="city"
                placeholder="City"
                className="input-field"
              />
            <input 
                onChange={(e) => props.handleChange(e, "education")}
                value={education.country}
                type="text"
                name="country"
                placeholder="Country"
                className="input-field"
              />
            <input 
                onChange={(e) => props.handleChange(e, "education")}
                value={education.degree}
                type="text"
                name="degree"
                placeholder="Degree"
                className="input-field"
              />
            <input 
                onChange={(e) => props.handleChange(e, "education")}
                value={education.majorSubject}
                type="text"
                name="majorSubject"
                placeholder="Major subject"
                className="input-field"
              />
            <input 
                onChange={(e) => props.handleChange(e, "education")}
                value={education.startYear}
                type="text"
                name="startYear"
                placeholder="Start year"
                className="input-field"
              />
            <input 
                onChange={(e) => props.handleChange(e, "education")}
                value={education.endYear}
                type="text"
                name="endYear"
                placeholder="End year"
                className="input-field"
              />
          </div>
    );
};

export default Education;