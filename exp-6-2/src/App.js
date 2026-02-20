import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validation Function
  const validate = () => {
    let newErrors = {};

    // Strict Email Validation
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.(com|in|org|net|edu)$/;

    if (!emailRegex.test(email)) {
      newErrors.email =
        "Enter valid email (example: name@gmail.com)";
    }

    // Password Validation
    const passwordRegex =
      /^[A-Z](?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must start with Capital letter, contain 1 number, 1 special character & minimum 5 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(
        `Email: ${email}\nPassword: ${password}`
      );

      // Reset form
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <h2>Client-Side Validation</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;