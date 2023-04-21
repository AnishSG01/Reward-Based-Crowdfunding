import React from 'react'
import {Carousel} from 'react-bootstrap';
import landing from "../Assets/charity.jpg"
import about from "../Assets/about.jpg"
import "../styles/feature.css"

function Feature() {
    return (
    <div className='feature'>
        <Carousel fade= {true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/3f/e9/a5/3fe9a583c2edd8d3c4ecc48c7af64d85.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Education Support</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.toiimg.com/thumb/msid-78643072,width-400,resizemode-4/78643072.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
            <h5>Assam Floods</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static.toiimg.com/photo/msid-79954599/79954599.jpg"
              alt="Third slide"
            />
    
            <Carousel.Caption>
            <h5>Bengal Floods</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://files.globalgiving.org/pfil/17590/pict_original.jpg?m=1403722201000"
              alt="Third slide"
            />
    
            <Carousel.Caption>
            <h5>Old Age Support</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
      );
    }

export default Feature;

