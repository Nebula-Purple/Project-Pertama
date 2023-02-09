import React from 'react'
import {Container, Row, Col, NavLink} from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className='footer pb-3 pt-4 d-flex'>
      <Container>
        <Row>
          <Col>
            <h1 className='fw-bold text-white'>Azura Design</h1>
          </Col>
          <Col className='wrapper'>
            <NavLink target="_blank" href='https://www.facebook.com/' className='icon'><i class="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i></NavLink>

            <NavLink target="_blank" href="https://bit.ly/3XiCvmu"><i class="fa-brands fa-whatsapp text-white fs-1 mx-lg-3 mx-2"></i></NavLink>

            <NavLink target="_blank" href="https://www.instagram.com/johanezluron/"><i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i></NavLink>

            <NavLink target="_blank" href="https://github.com/Yohanesluron96"><i class="fa-brands fa-github text-white fs-1 mx-lg-3 mx-2"></i></NavLink>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center text-white-50'>&copy; copyright by Johanez Luron 2023 | All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComp