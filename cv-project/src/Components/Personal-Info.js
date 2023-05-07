import React from "react";
import './Form.css';

const Personal = (props) => {
    const { personalInfo } = props;

    return(
        <div id='personal-info'>
            <input 
                onChange={(e) => props.handleChange(e, "personalInfo")}
                value={personalInfo.firstName}
                type="text"
                name="firstName"
                placeholder="First name"
                className="input-field"
            />
            <input 
                onChange={(e) => props.handleChange(e, "personalInfo")}
                value={personalInfo.lastName}
                type="text"
                name="lastName"
                placeholder="Last name"
                className="input-field"
            />
            <input 
                onChange={(e) => props.handleChange(e, "personalInfo")}
                value={personalInfo.address}
                type="text"
                name="address"
                placeholder="Address"
                className="input-field"
            />
            <input 
                onChange={(e) => props.handleChange(e, "personalInfo")}
                value={personalInfo.phoneNumber}
                type="text"
                name="phoneNumber"
                placeholder="Phone number"
                className="input-field"
            />
            <input 
                onChange={(e) => props.handleChange(e, "personalInfo")}
                value={personalInfo.email}
                type="text"
                name="email"
                placeholder="Email"
                className="input-field"
            />
            <input 
                onChange={(e) => props.handleChange(e, "personalInfo")}
                value={personalInfo.description}
                type="text"
                name="description"
                placeholder="Describe yourself..."
                className="input-field"
            />
        </div>
    );
};



export default Personal;