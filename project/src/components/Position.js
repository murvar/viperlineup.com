import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';

export default function Position(name, clip1, clip2, instructions, image) {
    
    return (
        <Container className='PositionBox'>
            <Row className='Position'>
                <h2>
                    {name}
                </h2>
            </Row>
            <Row className=''>
                <Col lg={12} xl={6}>
                    <video key={clip1} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                        <source src={clip1} type="video/mp4" />
                    </video>
                </Col>
                <Col lg={12} xl={6}>
                    <video key={clip2} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                    <source src={clip2} type="video/mp4" />
                    </video>
                </Col>
            </Row>
            <Row className=''>
                <Col lg={12} xl={6}>
                    <ul className="instructions">{instructions}</ul>
                </Col>
                <Col lg={12} xl={6}>
                    <img src={image} width="100%" height="100%"/>
                </Col>
            </Row>

        </Container>
    )
}