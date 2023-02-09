import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className='hero min-vh-100 w-100' id='home'>
      <Container>
        <Row>
          <Col>
          <h1 className='text-black fw-bold text-center fs-1 animate__animated animate__fadeInUp'>Mari bersantai sejenak</h1>
          <p className='text-black-50 text-center animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, porro!</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroComp