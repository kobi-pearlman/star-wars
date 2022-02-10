import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import VehicleContainer from "./components/vehicle/VehicleContainer";

const App = () => {
  return (
    <div className="App">
      <div className="nav-links">
        <Link className="link" to={"/vehicle"}>
          vehicle Data
        </Link>
        <Link className="link" to={"/dashboard"}>
          Home World Data
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/vehicle" />} />

        <Route path="/vehicle" element={<VehicleContainer />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
