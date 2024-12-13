import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <Router>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="content">

        hello I am Garvit Trivedi
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NavLink to="/About" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
