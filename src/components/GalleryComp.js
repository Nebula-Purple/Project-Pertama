import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import desain1 from '../assests/img/desain.1.jpg'
import desain2 from '../assests/img/desain.2.jpg'
import desain3 from '../assests/img/desain.3.jpg'
import desain4 from '../assests/img/desain.4.jpg'
import desain5 from '../assests/img/desain.5.jpg'
import desain6 from '../assests/img/desain.6.jpg'

const GalleryComp = () => {
  return (
    <div className=' gallery min-vh-100 d-flex align-items-center' id='gallery'>
      <Container>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4'>
          <Col>
            <img src= {desain1} alt="unsplash.com" className='w-100' data-aos="fade-up"/>
          </Col>
          <Col>
            <img src= {desain2} alt="unsplash.com" className='w-100' data-aos="fade-up" data-aos-delay="200" />
          </Col>
          <Col>
            <img src= {desain3} alt="unsplash.com" className='w-100' data-aos="fade-up" data-aos-delay="400" />
          </Col>
          <Col>
            <img src= {desain4} alt="unsplash.com" className='w-100' data-aos="fade-up" data-aos-delay="600" />
          </Col>
          <Col>
            <img src= {desain5} alt="unsplash.com" className='w-100' data-aos="fade-up" data-aos-delay="800"/>
          </Col>
          <Col>
            <img src= {desain6} alt="unsplash.com" className='w-100' data-aos="fade-up" data-aos-delay="1000"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GalleryComp