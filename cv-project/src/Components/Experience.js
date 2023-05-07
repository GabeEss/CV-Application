import React from "react";
import './Form.css';

const Experience = (props) => {
    const { experience } = props;

    return (
        <div id="experience">
        <input 
            onChange={(e) => props.handleChange(e, "experience")}
            value={experience.position}
            type="text"
            name="position"
            placeholder="Position"
            className="input-field"
            />
        <input 
            onChange={(e) => props.handleChange(e, "experience")}
            value={experience.company}
            type="text"
            name="company"
            placeholder="Company"
            className="input-field"
            />
        <input 
            onChange={(e) => props.handleChange(e, "experience")}
            value={experience.city}
            type="text"
            name="city"
            placeholder="City"
            className="input-field"
            />
        <input 
            onChange={(e) => props.handleChange(e, "experience")}
            value={experience.country}
            type="text"
            name="country"
            placeholder="Country"
            className="input-field"
            />
        <input 
            onChange={(e) => props.handleChange(e, "experience")}
            value={experience.startYear}
            type="number"
            name="startYear"
            placeholder="Start year"
            className="input-field"
            required
            min="1900"
            max={new Date().getFullYear()}
            />
            <input 
            onChange={(e) => props.handleChange(e, "experience")}
            value={experience.endYear}
            type="number"
            name="endYear"
            placeholder="End year"
            className="input-field"
            required
            min="1900"
            max={new Date().getFullYear()}
            />
        </div>
    );
}

export default Experience;