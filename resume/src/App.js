
import './App.css';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import Tooltip from '@mui/material/Tooltip';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import About from './about/About';
import Interests from './interests/Interests';
import Contact from './contact/Contact';

const TabIcon = ({ icon: Icon, link, label }) => {
  return (
    <Tooltip title={label} placement= 'right'>
      <li>
        <Link to={link}>
          <Icon sx={{ fontSize: 40, color: '#cc689f' }} />
        </Link>
      </li>
    </Tooltip>
  );
};

TabIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string
};

function App() {
  const [selectedTab, setSelectedTab] = useState('');
  
  return (
    <Router>
      <div className="app-container">
        <aside className="sidebar">
          <nav>
            <ul className="nav-tabs">

            <TabIcon icon={HomeTwoToneIcon} link="/mishaaisyah" label="Home" />
            <TabIcon icon={InfoTwoToneIcon} link="/about" label="Info"/>
            <TabIcon icon={FavoriteTwoToneIcon} link="/interests" label="Interests" />
            <TabIcon icon={QuestionAnswerTwoToneIcon} link="/contact" label="Contact" />

            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/mishaaisyah" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
