import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import HamburgerMenu from './HamburgerMenu';

export default function Footer() {


    return (

        <Container fluid className='fluid'>
            <Row>
                <footer>
                    <Row>
                        <Col md={6} >
                            <a href="/About">About us</a>
                        </Col>
                        <Col md={6}>
                            <a href="/Contact">Contact</a>
                        </Col>
                    </Row>
                </footer>
            </Row>
        </Container>
    )
}
