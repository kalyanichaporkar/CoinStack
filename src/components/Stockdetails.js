import React, { useState, useEffect } from "react";

const StockDetailsPage = () => {
  // Simulated user stock data (this could be fetched from an API or passed as props)
  const [userStock] = useState({
    symbol: "IBM",
    company: "IBM Corporation",
    quantity: 50,
    purchasePrice: 120.5,
    purchaseDate: "2024-01-10",
    currentPrice: 135.8, // Simulated current price
    stockHistory: [
      { date: "2024-01-10", price: 120.5 },
      { date: "2024-01-15", price: 125.0 },
      { date: "2024-01-20", price: 130.0 },
      { date: "2024-01-25", price: 135.8 },
    ],
  });

  // Calculate current stock value, gain/loss
  const currentStockValue = userStock.quantity * userStock.currentPrice;
  const purchaseValue = userStock.quantity * userStock.purchasePrice;
  const gainLoss = currentStockValue - purchaseValue;
  const gainLossPercentage = (gainLoss / purchaseValue) * 100;

  useEffect(() => {
    // Here you could fetch real-time stock data if needed
  }, []);

  return (
    <div className="stock-details-container">
      <h1 className="page-title">Stock Purchase Details</h1>

      {/* Stock Information Section */}
      <div className="stock-info-card">
        <h2 className="stock-title">{userStock.company} ({userStock.symbol})</h2>
        <p><strong>Quantity:</strong> {userStock.quantity} shares</p>
        <p><strong>Purchase Price:</strong> ${userStock.purchasePrice.toFixed(2)}</p>
        <p><strong>Purchase Date:</strong> {userStock.purchaseDate}</p>
        <p><strong>Current Price:</strong> ${userStock.currentPrice.toFixed(2)}</p>
        <p className={`gain-loss ${gainLoss >= 0 ? "positive" : "negative"}`}>
          <strong>Gain/Loss:</strong> ${gainLoss.toFixed(2)} ({gainLossPercentage.toFixed(2)}%)
        </p>
      </div>

      {/* Stock History Section */}
      <h2 className="history-title">Stock Price History</h2>
      <div className="history-table-container">
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {userStock.stockHistory.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>${entry.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>
        {`
          /* Container for the page */
          .stock-details-container {
            min-height: 100vh;
            background: linear-gradient(to right, #1a202c, #2d3748);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 40px;
          }

          /* Page Title */
          .page-title {
            font-size: 3rem;
            font-weight: bold;
            color: #fbbf24;
            margin-bottom: 30px;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          }

          /* Card for displaying stock details */
          .stock-info-card {
            width: 100%;
            max-width: 900px;
            background-color: #2d3748;
            padding: 20px;
            border-radius: 12px;
            border: 1px solid #4a5568;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            margin-bottom: 30px;
          }

          .stock-title {
            font-size: 2rem;
            font-weight: bold;
            color: #fbbf24;
            margin-bottom: 20px;
          }

          /* Stock info text */
          .stock-info-card p {
            font-size: 1.125rem;
            margin: 5px 0;
          }

          /* Gain/Loss Text */
          .gain-loss {
            font-size: 1.25rem;
            font-weight: bold;
          }

          .gain-loss.positive {
            color: #48bb78; /* Green for gain */
          }

          .gain-loss.negative {
            color: #f56565; /* Red for loss */
          }

          /* History Section */
          .history-title {
            font-size: 2rem;
            font-weight: bold;
            color: #fbbf24;
            margin-bottom: 15px;
          }

          /* Table for stock price history */
          .history-table-container {
            overflow-x: auto;
            width: 100%;
            max-width: 900px;
          }

          .history-table {
            width: 100%;
            border-collapse: collapse;
            background-color: #2d3748;
            border-radius: 8px;
            border: 1px solid #4a5568;
          }

          .history-table th, .history-table td {
            padding: 12px;
            text-align: center;
            border: 1px solid #4a5568;
            color: #e2e8f0;
          }

          .history-table th {
            background-color: #4a5568;
          }

          .history-table tr:nth-child(even) {
            background-color: #2b3a47;
          }

          .history-table tr:hover {
            background-color: #4a5568;
          }
        `}
      </style>
    </div>
  );
};

export default StockDetailsPage;
