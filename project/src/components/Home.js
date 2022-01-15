import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

export default function Home() {

    const Description = "Viper can use her snakebite ability for postplant molly lineups. The ability creates poisonous puddles which causes the enemy to take damage, preventing them of defusing the spike. This website is a collection of lineups for the most common planting spots on each site. This is often called default plant."

    return (

        <Container fluid className='Main'>
            <Helmet>
                <title>Postplant Viper Lineups</title>
                <meta name="description" content="Default postplant viper molly lineups for all maps. Navigate to find specific map" />
            </Helmet>
            <Row>
                <Col sm={0} md={2} className='LeftSideBanner d-none d-lg-block'>
                    <p>Banner</p>
                </Col>
                <Col md={12} lg={{span:8}} className=''>
                    <Row>
                        <Link to="/"><input className="Banner" type="image" name="Home" src="banner.png" alt="Home" /></Link>
                    </Row>
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
                            <Link to="/Ascent"><input className="imagebutton" type="image" name="Ascent" src="maps/ascent.png"/></Link>
                            
                        </Col>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Bind"><input className="imagebutton" type="image" name="Bind" src="maps/bind.png" /></Link>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Breeze"><input className="imagebutton" type="image" name="Breeze" src="maps/breeze.png" /></Link>
                            
                        </Col>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Fracture"><input className="imagebutton" type="image" name="Fracture" src="maps/fracture.png" /></Link>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Haven"><input className="imagebutton" type="image" name="Haven" src="maps/haven.png" /></Link>
                            
                        </Col>
                        <Col lg={12} xl={6} className='mt-3 home_links'>
                            <Link to="/Icebox"><input className="imagebutton" type="image" name="Icebox" src="maps/icebox.png" /></Link>
                        </Col>
                    </Row>
                    <Row className=''>
                        <Col lg={12} xl={{span:6, offset:3}} className='mt-3 mb-5'>
                            <Link to="/Split"><input className="imagebutton" type="image" name="Split" src="maps/split.png" /></Link>
                        </Col>
                    </Row>
                    <Row className='BottomBanner fixed-bottom'>
                            <Col>
                                <p>Banner</p>
                            </Col>
                    </Row>
                </Col>
                <Col sm={0} md={2} className='SideBanner d-none d-lg-block'>
                    <p>Banner</p>
                </Col>
            </Row>
            


        </Container>
    )
}

