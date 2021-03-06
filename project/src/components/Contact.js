import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import LeftSide from './LeftSide';
import HamburgerMenu from './HamburgerMenu';
import Footer from "./Footer";
import SideBanner from './SideBanner';

export default function Contact() {

    return (

        <Container fluid className='Main d-flex flex-wrap flex-column'>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Information about the website" />
            </Helmet>
            <Row className="d-block d-lg-none fixed-top">

                <HamburgerMenu className="sidebar"/>

            </Row>
            <Row>
                <Col sm={0} md={2} className='Leftside d-none d-lg-block'>
                    <Link to="/"><input className="" width="50%" type="image" name="Home" src="home.jpg" alt="Home" /></Link>
                    <h2>Maps</h2>
                    <LeftSide className="sidebar"/>
                </Col>
                <Col md={12} lg={{span:8, offset:2}} className='contactMain'>
                    <Row className="Description">
                        <h1>
                            Contact
                        </h1>
                    </Row>
                    <Row className='Description mt-3'>
                        <p>
                            We would love to get your feedback!
                            <br/>
                            Please reach out to us at viperpostplant@gmail.com
                        </p>
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </Col>
                <Col sm={0} md={2} className='SideBanner d-none d-lg-block'>
                    <SideBanner />
                </Col>
            </Row>
        </Container>
    )
}

