import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="logo">My Portfolio</h1>
          <button className="hamburger" onClick={toggleNav}>
            ☰
          </button>
          <nav className={`navbar ${navOpen ? "open" : ""}`}>
            <Link to="/" className="nav-item" onClick={() => setNavOpen(false)}>Home</Link>
            <Link to="/about" className="nav-item" onClick={() => setNavOpen(false)}>About</Link>
            <Link to="/projects" className="nav-item" onClick={() => setNavOpen(false)}>Projects</Link>
            <Link to="/contact" className="nav-item" onClick={() => setNavOpen(false)}>Contact</Link>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
