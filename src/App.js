import React from 'react';
import './App.css';
import construction from './construction.svg';
import Container from 'react-bootstrap/Container';
import HeaderNav from './components/HeaderNav/HeaderNav.js';
import Hero from './components/Hero/Hero.js';

function App() {
  const patientStyle = (
    {
      paddingTop: '15vh',
      textAlign: 'center',
    }
  );
  
  return (
    <Container className="App" fluid>
      <HeaderNav></HeaderNav>
      <Hero></Hero>
      {/* TechStack */}
      {/* Info */}
      {/* Info */}
      {/* Contact */}
      {/* FooterBar */}

      <div style={patientStyle}>
        <img src={construction} alt="Construction icon" />
        <h1>Please be patient, this project is under construction...</h1>
      </div>
    </Container>
  );
}

export default App;
