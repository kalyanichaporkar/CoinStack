import React from "react";
// import Portfolio from "./Portfolio";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <span style={styles.logo}>Stock Management</span>
      <div style={styles.navLinks}>
        <span style={styles.link}>Portfolio</span>
        <span style={styles.link}>Login</span>
        <span style={styles.link}>Register</span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#4CAF50", // Changed to a green shade
    color: "white",
    padding: "1rem 2rem", // More padding for a wider navbar
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Slightly stronger shadow
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed", // Keeps navbar fixed at the top
    top: "0",
    left: "0",
    right: "0",
    zIndex: "1000", // Keeps navbar on top of other content
  },
  logo: {
    fontSize: "1.8rem", // Larger font for the logo
    fontWeight: "600",
    letterSpacing: "1px", // Adds spacing between letters
    cursor: "pointer", // Indicates interactivity
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem", // Increased gap between links for better spacing
  },
  link: {
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "color 0.3s ease", // Adds smooth color transition on hover
  },
  linkHover: {
    color: "#f3f4f6", // Light hover color for links
  },
};

export default Navbar;
