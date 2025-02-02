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
    <div style={styles.container}>
      <Navbar />
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login Page</h2>
        <select
          onChange={(e) => setUserType(e.target.value)}
          style={styles.select}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <div style={styles.inputContainer}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    paddingTop: "60px",  // Ensures the content doesn't overlap with the navbar
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "40px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
  },
  select: {
    padding: "0.5rem",
    marginBottom: "1rem",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "0.75rem 1.25rem",
    backgroundColor: "#4CAF50",  // Changed to a green shade
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "1rem",
    transition: "background-color 0.3s ease",
  },
};

export default Login;
