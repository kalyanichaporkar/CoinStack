import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("user");
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (credentials.username && credentials.password) {
      alert(`${userType} logged in successfully!`);
      navigate("/");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <div className="form-container">
        <h2 className="heading">Login</h2>
        <select
          onChange={(e) => setUserType(e.target.value)}
          className="select"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <div className="input-container">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className="input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="input"
          />
          <button onClick={handleLogin} className="button">
            Login
          </button>
        </div>
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

          /* Container for the login page */
          .login-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            padding-top: 60px; /* Ensures the content doesn't overlap with the navbar */
          }

          /* Form container */
          .form-container {
            background-color: #2d3748;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 400px;
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

          /* Select dropdown style */
          .select {
            padding: 0.5rem;
            margin-bottom: 1rem;
            width: 100%;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 16px;
            color: #333;
          }

          /* Input container style */
          .input-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          /* Input field style */
          .input {
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;
          }

          /* Button style */
          .button {
            padding: 0.75rem 1.25rem;
            background-color: #4CAF50;  /* Green shade */
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 1rem;
            transition: background-color 0.3s ease;
          }

          /* Button hover effect */
          .button:hover {
            background-color: #45a049;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
