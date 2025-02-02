import React from "react";
// import Portfolio from "./Portfolio";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heading}>Welcome to Stock Management & Visualization</h1>
        <p style={styles.description}>
          Track, analyze, and visualize real-time stock market data with our powerful management system.
        </p>
        <span style={styles.exploreButton}>Explore Portfolio</span>
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
    justifyContent: "flex-start",
    paddingTop: "80px", // Adds space for the fixed navbar
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    textAlign: "center",
    padding: "0 20px", // Padding for mobile responsiveness
  },
  heading: {
    fontSize: "2.8rem", // Larger font size for the heading
    fontWeight: "700",
    color: "#1e40af",
    marginBottom: "1.5rem", // More space after the heading
    letterSpacing: "1px", // Adds slight letter spacing for better readability
  },
  description: {
    fontSize: "1.125rem",
    color: "#4b5563",
    maxWidth: "40rem",
    marginBottom: "2rem", // Added margin for spacing between description and button
    lineHeight: "1.6", // Increased line height for better readability
  },
  exploreButton: {
    padding: "1rem 2rem",
    backgroundColor: "#4CAF50", // Changed to a green shade
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "500",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease", // Added transition for smooth hover effect
    ":hover": {
      backgroundColor: "#45a049", // Darker green on hover
      transform: "scale(1.05)", // Slight zoom-in effect on hover
    },
  },
};

export default Homepage;
