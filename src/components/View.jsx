import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'


function View() {
  return (
    <Row className='w-100 ms-4 ms-md-0'>
      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
         <Videocard/>
      </Col>

      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
         <Videocard/>
      </Col>

      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
         <Videocard/>
      </Col>

      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
         <Videocard/>
      </Col>

      <Col xs={12} md={6} lg={4} xl={3} className='d-flex justify-content-center align-items-center'>
         <Videocard/>
      </Col>
    
    </Row>
  )
}

export default View