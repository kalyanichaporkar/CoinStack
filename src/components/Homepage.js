import React from "react";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="heading">Welcome to Stock Management & Visualization</h1>
        <p className="description">
          Track, analyze, and visualize real-time stock market data with our powerful management system.
        </p>
        <span className="explore-button">Explore Portfolio</span>
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

          /* Container for the homepage */
          .homepage-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 80px; /* Adds space for the fixed navbar */
          }

          /* Hero Section */
          .hero-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 80vh;
            text-align: center;
            background-color:rgb(6, 20, 78); /* Solid background color */
            padding: 0 20px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            margin-top: 20px;
          }

          /* Heading Style */
          .heading {
            font-size: 3rem; /* Larger font size */
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Added text shadow for better readability */
          }

          /* Description Style */
          .description {
            font-size: 1.25rem;
            color: #e5e7eb;
            max-width: 40rem;
            margin-bottom: 2rem;
            line-height: 1.6;
            font-weight: 400;
          }

          /* Explore Button Style */
          .explore-button {
            padding: 1rem 2rem;
            background-color: #4caf50;
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          /* Hover Effect for Explore Button */
          .explore-button:hover {
            background-color: #45a049;
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default Homepage;
