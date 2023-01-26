import React from 'react';
import './App.css';
import construction from './construction.svg';
import Container from 'react-bootstrap/Container';
import HeaderNav from './components/HeaderNav/HeaderNav.js';
import Hero from './components/Hero/Hero.js';
import LogoDisplay from './components/LogoDisplay/LogoDisplay.js';
import Info from './components/Info/Info.js'

function App() {
  const patientStyle = (
    {
      paddingTop: '15vh',
      textAlign: 'center',
    }
  );

  const aboutText = "I graduated in December 2022 from Utah State University with my Bachelor’s in Computer Science. Now I’m looking to start off strong in my career as a Full-Stack Developer. When I’m not writing code, I can often be found running, playing basketball, following the NBA, listening to Thundercat, or spending time with friends.";
  const portText = "I’ve completed Backend/Cloud internships at FamilySearch and HealthCatalyst.  I plan on eventually migrating much of my existing portfolio to be hosted here. Until then, completed projects can be found on my GitHub.";

  return (
    <Container className="App" fluid>
      <div className="ContentWrapper">
        <HeaderNav></HeaderNav>
        <Hero></Hero>
        <LogoDisplay></LogoDisplay>
        <Info
          img="about"
          title="About Me"
          text={aboutText}
          buttonText="learn more"
          buttonHref="#about"
          align="right"
        >
        </Info>
        <Info
          img="portfolio"
          title="Experience & Portfolio"
          text={portText}
          buttonText="visit my github"
          buttonHref="http://www.github.com/christensenjo"
          align="left"
        >
        </Info>
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
