import React from "react";

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow-lg bg-gray-800 p-4 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);
