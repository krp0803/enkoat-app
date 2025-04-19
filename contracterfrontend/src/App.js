import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <nav className="bg-white shadow p-4 flex space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Form
        </Link>
        <Link to="/dashboard" className="text-blue-600 hover:underline">
          Dashboard
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;