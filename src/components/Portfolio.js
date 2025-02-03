import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./Card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./Table";
import Navbar from "./Navbar";

const Portfolio = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        if (data["Time Series (Daily)"]) {
          const timeSeries = data["Time Series (Daily)"];
          const formattedData = Object.keys(timeSeries).map(date => ({
            date,
            open: timeSeries[date]["1. open"],
            high: timeSeries[date]["2. high"],
            low: timeSeries[date]["3. low"],
            close: timeSeries[date]["4. close"],
            volume: timeSeries[date]["5. volume"],
            symbol: "IBM",
            company: "IBM Corporation"
          }));
          setStockData(formattedData.slice(0, 10)); // Limiting to 10 entries for display
        } else {
          throw new Error("Invalid API response format");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching stock data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="portfolio-container">
      <Navbar />
      <h1 className="portfolio-title">Stock Portfolio</h1>
      <Card className="portfolio-card">
        <CardContent>
          {loading ? (
            <p className="loading-text">Loading stock data...</p>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <div className="table-container">
              <Table className="portfolio-table">
                <TableHeader className="table-header">
                  <TableRow className="table-row">
                    <TableHead className="table-head">Date</TableHead>
                    <TableHead className="table-head">Symbol</TableHead>
                    <TableHead className="table-head">Company</TableHead>
                    <TableHead className="table-head">Open</TableHead>
                    <TableHead className="table-head">High</TableHead>
                    <TableHead className="table-head">Low</TableHead>
                    <TableHead className="table-head">Close</TableHead>
                    <TableHead className="table-head">Volume</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockData.map((stock, index) => (
                    <TableRow key={index} className="table-row-hover">
                      <TableCell className="table-cell">{stock.date}</TableCell>
                      <TableCell className="table-cell">{stock.symbol}</TableCell>
                      <TableCell className="table-cell">{stock.company}</TableCell>
                      <TableCell className="open-cell">{stock.open}</TableCell>
                      <TableCell className="high-cell">{stock.high}</TableCell>
                      <TableCell className="low-cell">{stock.low}</TableCell>
                      <TableCell className="close-cell">{stock.close}</TableCell>
                      <TableCell className="volume-cell">{stock.volume}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <style>
        {`
          .portfolio-container {
            min-height: 100vh;
            background: linear-gradient(to right, #1a202c, #2d3748);
            color: white;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .portfolio-title {
            font-size: 3.5rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 2.5rem;
            color: #fbbf24;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }

          .portfolio-card {
            width: 100%;
            max-width: 75rem;
            padding: 2rem;
            background-color: #2d3748;
            border-radius: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            border: 1px solid #4a5568;
            backdrop-filter: blur(10px);
          }

          .loading-text {
            text-align: center;
            font-size: 1.5rem;
            color: #edf2f7;
            animation: pulse 1.5s infinite;
          }

          .error-text {
            text-align: center;
            font-size: 1.25rem;
            color: #f56565;
            font-weight: bold;
          }

          .table-container {
            overflow-x: auto;
          }

          .portfolio-table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #4a5568;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 0.75rem;
            overflow: hidden;
          }

          .table-header {
            background-color: #4a5568;
            color: #e2e8f0;
            font-size: 1.25rem;
          }

          .table-row {
            text-align: center;
          }

          .table-row-hover:hover {
            background-color: #2d3748;
            transition: background-color 0.3s;
          }

          .table-cell {
            padding: 1rem;
            border: 1px solid #4a5568;
            color: #e2e8f0;
            text-align: center;
          }

          .open-cell {
            color: #48bb78;
            font-weight: bold;
          }

          .high-cell {
            color: #38a169;
            font-weight: bold;
          }

          .low-cell {
            color: #f56565;
            font-weight: bold;
          }

          .close-cell {
            color: #edf2f7;
          }

          .volume-cell {
            color: #edf2f7;
          }

          @keyframes pulse {
            0% {
              opacity: 0.75;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0.75;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Portfolio;
