import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Carousels.css'; 

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='https://images.pexels.com/photos/1136888/pexels-photo-1136888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.pexels.com/photos/2291811/pexels-photo-2291811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.pexels.com/photos/1621168/pexels-photo-1621168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;