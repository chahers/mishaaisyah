
import './App.css';
import Avatar from '@mui/material/Avatar';
import React, { useState, useRef, useEffect } from 'react';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import Tooltip from '@mui/material/Tooltip';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import Skill from './skill/Skill';
import Interests from './interests/Interests';
import Contact from './contact/Contact';

const TabIcon = ({ icon: Icon, onClick, label, isSelected }) => {
  return (
    <Tooltip title={label} placement= 'right'>
      <li onClick={onClick} className={isSelected ? 'selected' : ''}>
          <Icon sx={{ fontSize: '5vh', color: '#cc689f' }} />
      </li>
    </Tooltip>
  );
};

TabIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  label: PropTypes.string,
  isSelected: PropTypes.bool
};

function App() {
  const [selectedTab, setSelectedTab] = useState('');
  const navigate = useNavigate();

  // Refs for each section
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const interestsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section when a nav item is clicked
  const scrollToSection = (ref, path) => {
    navigate(path);
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setSelectedTab(path);
  };

  // Update the URL route based on scroll position
  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.6 };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setSelectedTab(id);
          navigate(`/${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observing each section
    homeRef.current && observer.observe(homeRef.current);
    skillRef.current && observer.observe(skillRef.current);
    interestsRef.current && observer.observe(interestsRef.current);
    contactRef.current && observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, [navigate]);

  return (
      <div className="app-container">
        <aside className="sidebar">
          <nav>
            <ul className="nav-tabs">

            <TabIcon 
              icon={HomeTwoToneIcon} 
              label="Home" 
              onClick={() => scrollToSection(homeRef, 'mishaaisyah')} 
              isSelected={selectedTab === 'mishaaisyah'}
            />
            <TabIcon 
              icon={BuildTwoToneIcon} 
              label="My skills" 
              onClick={() => scrollToSection(skillRef, 'skill')} 
              isSelected={selectedTab === 'skill'}
            />
            <TabIcon 
              icon={FavoriteTwoToneIcon} 
              label="My interests" 
              onClick={() => scrollToSection(interestsRef, 'interests')} 
              isSelected={selectedTab === 'interests'}
            />
            <TabIcon 
              icon={QuestionAnswerTwoToneIcon} 
              label="Contact" 
              onClick={() => scrollToSection(contactRef, 'contact')} 
              isSelected={selectedTab === 'contact'}
            />

            </ul>
          </nav>
        </aside>
        <main className="main-content">
        <div id="mishaaisyah" ref={homeRef}><Home /></div>
        <div id="skill" ref={skillRef}><Skill /></div>
        <div id="interests" ref={interestsRef}><Interests /></div>
        <div id="contact" ref={contactRef}><Contact /></div>
        </main>
      </div>
  );
}

export default App;
