import '../sidebar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Github from '../assets/github-142.svg'
import Twitter from '../assets/x-icon-hss.svg'
import Logo from '../assets/creeptar-high-resolution-logo-transparent.png';
import CloseImg from '../assets/cancel-close-delete.svg'

const Sidebar = () => {

    const [sidebarVisible, setSidebarVisible] = useState(true);
  
    const closeSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };

  return (
    <div className="sidebar" style={{ display: sidebarVisible ? 'flex' : 'none' }}>
      <div className="sidebar-header">
        <div className="logo">
          <img src={Logo} alt="Creepter" />
          <img src={CloseImg} alt="Close" className="close-img" onClick={closeSidebar}/>
        </div>
      </div>
      <div className="sidebar-menu">
        <Link to="/">
        <div className="menu-item active">Dashboard</div>
        </Link>
        <Link to="/coins">
        <div className="menu-item">Tokens</div>
        </Link>
        <div className="menu-category">Docs</div>
        <a href="https://github.com/stanfy79/Tooling-Data-Dashboard/blob/main/README.md" target="_blank">
        <div className="menu-item">Documentation</div>
        </a>
        <div className="menu-category">Socials</div>
        <a href="https://github.com/stanfy79" target='_blank'>
        <div className="menu-item"><img src={Github} alt="Github" /></div>
        </a>
        <a href="https://x.com/stanfyhack" target='_blank'>
        <div className="menu-item"><img src={Twitter} className='social-img' alt="Github" /></div>
        </a>
      </div>
      <div className="sidebar-footer">
        <button className="feedback-button">Share feedback</button>
      </div>
    </div>
  );
};

export default Sidebar;
