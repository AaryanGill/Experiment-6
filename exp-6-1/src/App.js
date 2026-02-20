import "./App.css";
import React, { useState } from "react";

function App() {

  // State Variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  // Handle Skills (Checkbox)
  const handleSkillsChange = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter(skill => skill !== value));
    }
  };

  // Handle Submit
  
  const handleSubmit = (e) => {
  e.preventDefault();

  alert(
`First Name: ${firstName}
Last Name: ${lastName}
DOB: ${dob}
Gender: ${gender}
Skills: ${skills.join(", ")}
Address: ${address}
State: ${state}`
  );

  // 🔥 Reset all fields after alert
  setFirstName("");
  setLastName("");
  setDob("");
  setGender("");
  setSkills([]);
  setAddress("");
  setState("");
};

  // Handle Cancel (Reset Form)
  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");
    setSkills([]);
    setAddress("");
    setState("");
  };

  return (
  <div className="container">
    <h2>Student Registration Form</h2>

    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <div className="inline-options">
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Skills</label>
        <div className="inline-options">
          <label>
            <input
              type="checkbox"
              value="Java"
              checked={skills.includes("Java")}
              onChange={handleSkillsChange}
            />
            Java
          </label>

          <label>
            <input
              type="checkbox"
              value="Python"
              checked={skills.includes("Python")}
              onChange={handleSkillsChange}
            />
            Python
          </label>

          <label>
            <input
              type="checkbox"
              value="React"
              checked={skills.includes("React")}
              onChange={handleSkillsChange}
            />
            React
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>State</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Select State</option>

          {/* All Indian States */}
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Chhattisgarh</option>
          <option>Goa</option>
          <option>Gujarat</option>
          <option>Haryana</option>
          <option>Himachal Pradesh</option>
          <option>Jharkhand</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Madhya Pradesh</option>
          <option>Maharashtra</option>
          <option>Manipur</option>
          <option>Meghalaya</option>
          <option>Mizoram</option>
          <option>Nagaland</option>
          <option>Odisha</option>
          <option>Punjab</option>
          <option>Rajasthan</option>
          <option>Sikkim</option>
          <option>Tamil Nadu</option>
          <option>Telangana</option>
          <option>Tripura</option>
          <option>Uttar Pradesh</option>
          <option>Uttarakhand</option>
          <option>West Bengal</option>

          {/* Union Territories */}
          <option>Andaman and Nicobar Islands</option>
          <option>Chandigarh</option>
          <option>Dadra and Nagar Haveli and Daman and Diu</option>
          <option>Delhi</option>
          <option>Lakshadweep</option>
          <option>Puducherry</option>
          <option>Ladakh</option>
          <option>Jammu and Kashmir</option>
        </select>
      </div>

      <div className="button-group">
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" onClick={handleCancel} className="cancel-btn">
          Cancel
        </button>
      </div>

    </form>
  </div>
);
}

export default App;