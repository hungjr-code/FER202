import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from './Components/Carousels/Carousels';
import AppNavbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import { Router, Routes, Route } from 'react-router-dom';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  }

  return (
    <>
      <div className={darkMode ? "dark-mode" : ""}>
        <button
          className="toggle-btn"
          onClick={handleToggleDarkMode}
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <h1>Orchid store</h1>
        <AppNavbar />
        <Carousels />
        <Home />
        <Footer />
      </div>
    </>

  );
}
export default App;
