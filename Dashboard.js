// src/Dashboard.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Sidebar = () => (
  <div className="bg-blue-600 w-64 h-screen p-4 flex flex-col text-white">
    <h2 className="text-2xl font-bold mb-6">Board.</h2>
    <ul className="flex flex-col gap-4">
      <li><a href="#dashboard" className="hover:text-gray-300">Dashboard</a></li>
      <li><a href="#transactions" className="hover:text-gray-300">Transactions</a></li>
      <li><a href="#schedules" className="hover:text-gray-300">Schedules</a></li>
      <li><a href="#users" className="hover:text-gray-300">Users</a></li>
      <li><a href="#settings" className="hover:text-gray-300">Settings</a></li>
    </ul>
  </div>
);

const DashboardContent = () => {
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      { label: "Guest", backgroundColor: "rgba(75,192,192,0.4)", data: [300, 400, 250, 300] },
      { label: "User", backgroundColor: "rgba(153,102,255,0.4)", data: [400, 200, 450, 350] }
    ],
  };

  const pieData = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [{ data: [55, 31, 14], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }],
  };

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Activities</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
