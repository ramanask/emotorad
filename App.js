// src/App.js
import React from "react";
import "./App.css";

// Sample Components (you can create these in separate files later)
function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Home</li>
        <li>Transactions</li>
        <li>Schedules</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <div className="header-icons">
        <span>🔍</span> {/* Search icon */}
        <span>👤</span> {/* Profile icon */}
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <div className="cards">
        <div className="card">Total Revenue: $2,129,430</div>
        <div className="card">Total Transactions: 1,520</div>
        <div className="card">Total Likes: 9,721</div>
        <div className="card">Total Users: 9,721</div>
      </div>
      <div className="charts">
        <div className="chart">[Chart Component - Activities]</div>
        <div className="chart">[Chart Component - Top Products]</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
