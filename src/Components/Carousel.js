import React from 'react';
import  '../Style/Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Slide_1 from '../Images/Liverpool.jpg';
import Slide_2 from '../Images/madrid.jpg';
import Slide_3 from '../Images/Juve.jpg';



function Slider(){
    return(
        <Carousel>
        <Carousel.Item interval={1000}>

          <img 
            className=" slider_img d-block w-100"
            src={Slide_1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="slider_img d-block w-100"
            src={Slide_2} alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider_img d-block w-100"
            src={Slide_3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

     
    




    );
}
export default Slider;