import React from "react";

export const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-gray-800 text-white border border-gray-700">
      {children}
    </table>
  </div>
);

export const TableHeader = ({ children }) => (
  <thead className="bg-gray-700">
    {children}
  </thead>
);

export const TableRow = ({ children }) => (
  <tr className="border-b border-gray-600">{children}</tr>
);

export const TableHead = ({ children }) => (
  <th className="px-4 py-2 text-left font-semibold border border-gray-600">{children}</th>
);

export const TableBody = ({ children }) => <tbody>{children}</tbody>;

export const TableCell = ({ children }) => (
  <td className="px-4 py-2 border border-gray-600">{children}</td>
);
