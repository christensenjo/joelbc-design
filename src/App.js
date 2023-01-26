import React from 'react';
import './App.css';
import construction from './construction.svg';
import Container from 'react-bootstrap/Container';
import HeaderNav from './components/HeaderNav/HeaderNav.js';
import Hero from './components/Hero/Hero.js';
import LogoDisplay from './components/LogoDisplay/LogoDisplay';

function App() {
  const patientStyle = (
    {
      paddingTop: '15vh',
      textAlign: 'center',
    }
  );
  
  return (
    <Container className="App" fluid>
      <div className="ContentWrapper">
        <HeaderNav></HeaderNav>
        <Hero></Hero>
        <LogoDisplay></LogoDisplay>
        {/* Info */}
        {/* Info */}
        {/* Contact */}
        {/* FooterBar */}

        <div style={patientStyle}>
          <img src={construction} alt="Construction icon" />
          <h1>Please be patient, this project is under construction...</h1>
        </div>
      </div>
      <div className="BgGradients">
        <div className="Grad1"></div>
        <div className="Grad2"></div>
        <div className="Grad3"></div>
      </div>
    </Container>
  );
}

export default App;
