import React from 'react';
import "../Style/Homepage.css";
import Navigate from '../Components/Navigate';
import Footer from '../Components/Footer';
import InfoCards from '../Components/InfoCards';
import Slider from '../Components/Carousel';
import { Container } from 'react-bootstrap';


function Homepage() {
  return (
    <div>
      <Navigate/>
      <Slider/>
    
      <Container>
        <InfoCards />
      </Container>

      <Footer/>
    </div>











  );

}

export default Homepage;