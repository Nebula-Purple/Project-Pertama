import React from 'react'
import {Container, Row, Col} from "react-bootstrap";

const ServiceComp = () => {
  return (
    <div className='services min-vh-100 d-flex align-items-center' id='services'>
        <Container>
            <Row className='mb-5'>
                <Col>
                    <h1 className='text-center fw-bold' data-aos="fade-up">Services</h1>
                    <p className='text-center' data-aos="fade-up" data-aos-delay="200">Pelayanan terbaik merupakan prioritas bagi kami.</p>
                </Col>
            </Row>
            <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
                <Col className='text-center py-5 px-3' data-aos="fade-up" data-aos-delay="400">
                <i class="fa-sharp fa-solid fa-coins fs-2 mb-4"></i>
                <h5 className='fw-bold'>Harga terjangkau</h5>
                <p className='text-white-40'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>

                <Col className='text-center py-5 px-3' data-aos="fade-up" data-aos-delay="600">
                <i class="fa-solid fa-thumbs-up fs-2 mb-4"></i>
                <h5 className='fw-bold'>Fasilitas terbaik</h5>
                <p className='text-white-40'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>

                <Col className='text-center py-5 px-3' data-aos="fade-up" data-aos-delay="800">
                <i class="fa-solid fa-shield-halved fs-2 mb-4"></i>
                <h5 className='fw-bold'>Tersertifikasi</h5>
                <p className='text-white-40'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
};

export default ServiceComp