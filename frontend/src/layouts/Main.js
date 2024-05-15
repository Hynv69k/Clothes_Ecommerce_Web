import React from "react";
import {BrowserRouter as Route, 
  Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </Router>
  );
}
