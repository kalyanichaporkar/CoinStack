import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Registration = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("user");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password || !formData.id) {
      alert("Please fill in all fields.");
      return;
    }
    alert(`${userType} registered successfully!\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nID: ${formData.id}`);
    navigate("/login");
  };

  return (
    <div className="registration-container">
      <Navbar />
      <div className="form-container">
        <h2 className="heading">Registration Page</h2>
        <form onSubmit={handleSubmit} className="form">
          {/* User Type Dropdown */}
          <div className="input-group">
            <label htmlFor="userType" className="label">User Type:</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="select"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Full Name Input */}
          <div className="input-group">
            <label htmlFor="fullName" className="label">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label htmlFor="email" className="label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label htmlFor="password" className="label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* ID Input */}
          <div className="input-group">
            <label htmlFor="id" className="label">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Enter your ID"
              value={formData.id}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>

      <style>
        {`
          /* Global styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }

          body {
            background-color: #1f2937;
            color: #d1d5db;
          }

          /* Container for the registration page */
          .registration-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 0 20px;
            padding-top: 60px; /* Ensures the content doesn't overlap with the navbar */
          }

          /* Form container */
          .form-container {
            background-color: #2d3748;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
            text-align: center;
          }

          /* Heading style */
          .heading {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: 600;
            color: #fff;
          }

          /* Form styles */
          .form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          /* Input group styles */
          .input-group {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
          }

          /* Label style */
          .label {
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: #fff;
          }

          /* Input style */
          .input {
            padding: 0.75rem;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #ddd;
            box-sizing: border-box;
          }

          /* Select dropdown style */
          .select {
            padding: 0.75rem;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #ddd;
            box-sizing: border-box;
          }

          /* Submit button style */
          .submit-button {
            padding: 0.75rem 2rem;
            background-color: #4CAF50;
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
            margin-top: 1.5rem;
            align-self: center;
          }

          /* Hover effect for submit button */
          .submit-button:hover {
            background-color: #45a049;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Registration;
