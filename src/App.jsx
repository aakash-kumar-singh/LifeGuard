// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import InsuranceLanding from "./components/InsuranceLanding";
import About from "./components/About";
import Plans from "./components/Plans";
import Premium from "./components/Premium";
import FAQ from "./components/FAQ";
import Claims from "./components/Claim";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<InsuranceLanding />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/claim" element={<Claims />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
