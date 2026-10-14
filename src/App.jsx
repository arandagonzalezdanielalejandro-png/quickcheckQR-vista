import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="flex bg-slate-100 font-sans">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/asistencias" element={<Dashboard />} />
            <Route path="/reportes" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}