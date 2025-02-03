import React, { useState, useEffect } from "react";

// Static form with options for buying and selling stocks
const ApiConnectivity = () => {
  const [stockData, setStockData] = useState([]);
  const [selectedStock, setSelectedStock] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [action, setAction] = useState(""); // 'buy' or 'sell'
  const [apiKey] = useState(""); // Empty for now, add your API key here

  // Fetch stock data from an API
  useEffect(() => {
    // const [apiKey] = useState("your-api-key-here");
    const fetchStockData = async () => {
      const url = `https://api.example.com/stocks?apikey=${apiKey}`; // Replace with actual API endpoint
      try {
        const response = await fetch(url);
        const data = await response.json();
        setStockData(data.stocks); // Assuming the data returns an array of stocks
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    if (apiKey) {
      fetchStockData();
    }
  }, [apiKey]);

  const handleStockSelect = (e) => {
    setSelectedStock(e.target.value);
  };

  const handleActionSelect = (e) => {
    setAction(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStock || !quantity || !action) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`You are about to ${action} ${quantity} of ${selectedStock}.`);
    // Add API logic to send the request to buy or sell stock
  };

  return (
    <div className="api-container">
      <h2>Buy/Sell Stocks</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Stock Dropdown */}
        <div className="input-group">
          <label htmlFor="stock" className="label">Select Stock:</label>
          <select
            id="stock"
            value={selectedStock}
            onChange={handleStockSelect}
            className="input"
          >
            <option value="">Select a Stock</option>
            {stockData.map((stock) => (
              <option key={stock.symbol} value={stock.symbol}>
                {stock.name} ({stock.symbol})
              </option>
            ))}
          </select>
        </div>

        {/* Action Dropdown (Buy/Sell) */}
        <div className="input-group">
          <label htmlFor="action" className="label">Action:</label>
          <select
            id="action"
            value={action}
            onChange={handleActionSelect}
            className="input"
          >
            <option value="">Select Action</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        {/* Quantity Input */}
        <div className="input-group">
          <label htmlFor="quantity" className="label">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="input"
            min="1"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>

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

          /* Container for the stock buy/sell page */
          .api-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            padding-top: 60px; /* Ensures the content doesn't overlap with the navbar */
          }

          /* Form container */
          .form {
            background-color: #2d3748;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
            text-align: center;
          }

          /* Heading style */
          h2 {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: 600;
            color: #fff;
          }

          /* Input group styles */
          .input-group {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5rem;
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
            width: 100%;
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
            width: 100%;
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

export default ApiConnectivity;
