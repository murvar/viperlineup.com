import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import LeftSide from './LeftSide';
import HamburgerMenu from './HamburgerMenu';

export default function About() {

    return (

        <Container fluid className='Main d-flex flex-wrap flex-column'>
            <Helmet>
                <title>About us</title>
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
                <Col md={12} lg={{span:8, offset:2}} className=''>
                    <Row className="Description">
                        <h1>
                            About us:
                        </h1>

                        <h2>
                            This webapplication is developed and maintained by two swedish
                            programming students as a pastime project.
                            <br/>
                            <br/>
                            When playing Valorant we wanted to find the perfect spots to
                            use Vipers snakebite ability. All we found online were either 
                            sketchy magazines farming click or long youtube tutorials never
                            getting to the point.
                            <br/>
                            <br/>
                            Our hope is that this website will help you just as much as it
                            helps us! If some information in incorrect, please do not hesitate
                            to reach out to us and we will do our best to push an update ASAP.
                        </h2>
                    </Row>
                </Col>
                <Col sm={0} md={2} className='SideBanner d-none d-lg-block'>
                    <p>Banner</p>
                </Col>
            </Row>
        </Container>
    )
}

