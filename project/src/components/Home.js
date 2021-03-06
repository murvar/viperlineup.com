import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import HamburgerMenu from './HamburgerMenu';
import SideBanner from './SideBanner';

export default function Home() {

    const Description = "Viper can use her snakebite ability for postplant molly lineups. The ability creates poisonous puddles which causes the enemy to take damage, preventing them of defusing the spike. This website is a collection of lineups for the most common planting spots on each site. This is often called default plant."

    window.scrollTo(0,0);

    return (

        <Container fluid className='Main'>
            <Helmet>
                <title>Postplant Viper Lineups</title>
                <meta name="description" content="Default postplant viper molly lineups for all maps. Navigate to find specific map" />
            </Helmet>
            <Row className="d-block d-lg-none fixed-top">

                <HamburgerMenu className="sidebar"/>

            </Row>
            <Row>
                <Col sm={0} md={2} className='LeftSideBanner d-none d-lg-block'>
                    <SideBanner />
                </Col>
                <Col md={12} lg={{span:8}} className=''>
                    <Row className='Title mt-3'>
                        <h1>Home: All Valorant Maps for Viper Lineups</h1>
                    </Row>
                    <Row className="Description mt-3">
                        <p>
                        {Description}
                        </p>
                    </Row>
                    <Row className=''>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Ascent"><input className="imagebutton_big" type="image" alt="Ascent" name="Ascent" src="maps/ascent.webp"/></Link>
                            
                        </Col>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Bind"><input className="imagebutton_big" type="image" alt="Bind" name="Bind" src="maps/bind.webp" /></Link>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Breeze"><input className="imagebutton_big" type="image" alt="Breeze" name="Breeze" src="maps/breeze.webp" /></Link>
                            
                        </Col>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Fracture"><input className="imagebutton_big" type="image" alt="Fracture" name="Fracture" src="maps/fracture.webp" /></Link>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Haven"><input className="imagebutton_big" type="image" alt="Haven" name="Haven" src="maps/haven.webp" /></Link>
                            
                        </Col>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Icebox"><input className="imagebutton_big" type="image" alt="Icebox" name="Icebox" src="maps/icebox.webp" /></Link>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col lg={12} xl={{span:6, offset:3}} className='mt-3 mb-5'>
                            <Link to="/Split"><input className="imagebutton_big" type="image" alt="Split" name="Split" src="maps/split.webp" /></Link>
                        </Col>
                    </Row>
                </Col>
                <Col sm={0} md={2} className='SideBanner d-none d-lg-block'>
                    <SideBanner />

                </Col>
            </Row>
            


        </Container>
    )
}

