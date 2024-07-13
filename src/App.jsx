import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Tokens from './pages/Tokens';
import Error from './pages/Error';
import Sidebar from './components/Sidebar';
import MenuBtn from './assets/menu-alt-03.svg';
import Logo from './assets/creeptar-high-resolution-logo-transparent.png';
import './App.css';

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className="wrapper">
        <div className="header-container">
          <div>
            <div className="app-menu" onClick={toggleSidebar}>
              <img src={MenuBtn} alt="Menu" />
            </div>
            <div className="app-logo">
              <img src={Logo} alt="Menu" />
            </div>
          </div>
        </div>
        {sidebarVisible ? '' : <Sidebar />}
        <div className='big-menu'>
        <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Tokens />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
