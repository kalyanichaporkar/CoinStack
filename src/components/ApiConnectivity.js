import React, { useState, useEffect } from "react";

// Static form with options for buying and selling stocks
const ApiConnectivity= () => {
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
    <div style={styles.container}>
      <h2>Buy/Sell Stocks</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Stock Dropdown */}
        <div style={styles.inputGroup}>
          <label htmlFor="stock" style={styles.label}>Select Stock:</label>
          <select
            id="stock"
            value={selectedStock}
            onChange={handleStockSelect}
            style={styles.input}
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
        <div style={styles.inputGroup}>
          <label htmlFor="action" style={styles.label}>Action:</label>
          <select
            id="action"
            value={action}
            onChange={handleActionSelect}
            style={styles.input}
          >
            <option value="">Select Action</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        {/* Quantity Input */}
        <div style={styles.inputGroup}>
          <label htmlFor="quantity" style={styles.label}>Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            style={styles.input}
            min="1"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
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
    justifyContent: "center",
    padding: "2rem",
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    padding: "2rem",
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  inputGroup: {
    marginBottom: "1.5rem",
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
    width: "100%",
    boxSizing: "border-box",
  },
  submitButton: {
    padding: "0.75rem 2rem",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "500",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    width: "100%",
  },
};

export default ApiConnectivity;
