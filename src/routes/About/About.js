import React from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import HeaderNav from '../../components/HeaderNav/HeaderNav.js';
import Bio from '../../components/Bio/Bio.js';
import Footer from '../../components/Footer/Footer.js';

function App() {
  return (
    <Container className="App" fluid>
      <div className="ContentWrapper">
        <HeaderNav></HeaderNav>
        <Bio />
      </div>
      <Footer></Footer>
    </Container>
  );
}

export default App;
