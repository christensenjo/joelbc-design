import React from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import HeaderNav from '../../components/HeaderNav/HeaderNav.js';
import Info from '../../components/Info/Info.js';
import Bio from '../../components/Bio/Bio.js';
import Footer from '../../components/Footer/Footer.js';

function App() {
  const whoText = "Hi, I'm Joel Christensen! I grew up in Twin Falls, ID, and my love for technology began at an early age. At just 14, I designed my first website, and as a high school sophomore, I wrote my first Javascript app.\nIn 2013, I attended the first-ever Google Developer Group North America (GDG NA) Summit at the Google campus. I was also a member of the first-ever high-school-age GDG from Southern Idaho.\nFrom 2016 to 2018, I served as a volunteer representative for a religious organization in Tampa, FL. It was a wonderful opportunity to give back to the community and serve others.\nAfter graduating from high school, I attended Utah State University from 2019-2022, where I earned a Bachelor's in Computer Science with a Minor in Economics. During my time at college, I completed back-end/cloud internships at FamilySearch and HealthCatalyst.\nAs a Full-Stack Software Engineer, I am passionate about creating a harmonious relationship between data and algorithms and the UI views that display them. I love to solve complex problems and develop creative solutions that help individuals and businesses succeed.";

  return (
    <Container className="App" fluid>
      <div className="ContentWrapper">
        <HeaderNav></HeaderNav>
          {/* TODO: Add About content */}
        <Bio />
        {/* <Info
          img="about"
          title="Bio"
          text={whoText}
          buttonText="Learn More"
          buttonHref="#about"
          align="right"
        >
        </Info> */}
      </div>
      <Footer></Footer>
      {/* <div className="BgGradients">
        <div className="Grad1"></div>
        <div className="Grad2"></div>
        <div className="Grad3"></div>
      </div> */}
    </Container>
  );
}

export default App;
