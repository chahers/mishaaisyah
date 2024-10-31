
import './App.css';
import Avatar from '@mui/material/Avatar';
import Picture from './picture.png';
import React, { useState } from 'react';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import Tooltip from '@mui/material/Tooltip';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  const [selectedTab, setSelectedTab] = useState('');
  
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <nav>
            <ul className="nav-tabs">

              <Tooltip title="Home" placement='right'>
                <li onClick={() => setSelectedTab('Home')}><Link to="/">
                <HomeTwoToneIcon sx={{ fontSize: 40 }}/>
                </Link></li>
              </Tooltip>

              <Tooltip title="About" placement='right'>
              <li onClick={() => setSelectedTab('About')}><Link to="/about">
              <InfoTwoToneIcon sx={{ fontSize: 40 }}/>
              </Link></li>
              </Tooltip>

              <Tooltip title="Interests" placement='right'>
              <li onClick={() => setSelectedTab('Interests')}><Link to="/interests">
              <FavoriteTwoToneIcon sx={{ fontSize: 40 }}/>
              </Link></li>
              </Tooltip>

              <Tooltip title="Contact" placement='right'>
              <li onClick={() => setSelectedTab('Contact')}><Link to="/contact">
              <QuestionAnswerTwoToneIcon sx={{ fontSize: 40 }}/>
              </Link></li>
              </Tooltip>

            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
