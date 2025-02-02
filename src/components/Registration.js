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
    <div style={styles.container}>
      <Navbar />
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Registration Page</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* User Type Dropdown */}
          <div style={styles.inputGroup}>
            <label htmlFor="userType" style={styles.label}>User Type:</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              style={styles.select}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Full Name Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="fullName" style={styles.label}>Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Email Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Password Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* ID Input */}
          <div style={styles.inputGroup}>
            <label htmlFor="id" style={styles.label}>ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Enter your ID"
              value={formData.id}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitButton}>Register</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "80px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "600px",
    padding: "2rem",
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginTop: "2rem",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#1e40af",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "0.5rem",
    color: "#4b5563",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #e5e7eb",
    boxSizing: "border-box",
  },
  select: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #e5e7eb",
    boxSizing: "border-box",
  },
  submitButton: {
    padding: "0.75rem 2rem",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "500",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    marginTop: "1.5rem",
    alignSelf: "center",
    ":hover": {
      backgroundColor: "#45a049",
      transform: "scale(1.05)",
    },
  },
};

export default Registration;
