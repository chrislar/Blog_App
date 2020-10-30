import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "../Style/Homepage.css";
import Navigate from '../Components/Navigate';
import Footer from '../Components/Footer';
import InfoCards from '../Components/InfoCards';
import Slider from '../Components/Carousel';


function Homepage() {
  return (
    <div>
      <Navigate/>
      {/* <Slider/> */}
      <InfoCards/>
      <Footer/>

      
      
    </div>











  );

}

export default Homepage;