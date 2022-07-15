import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

// SVG
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <Container style={containerStyles}>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="d-flex justify-content-center">
          <Image style={imgStyles} src={logo} alt="logo" />
        </Col>
      </Row>
      <Row><h4 style={{ color: "#00C2CB" }}>Membership apps, that is fully yours.</h4></Row>
    </Container>
  )
}

const containerStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const imgStyles = {
  height: '19vmin',
  
}

export default Logo