import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

export default function Home() {

    const Description = "Viper can use her snakebite ability for postplant molly lineups. The ability creates poisonous puddles which prevent the enemy from defusing the spike as they are taking damage. This webpage is a collection of lineups for the most common plant on each site, also called the default plant."

    return (
        <Container fluid className='PositionBox Main'>
            <Row>
                <Col sm={0} md={2} className='SideBanner d-none d-lg-block'>
                    <p>Banner</p>
                </Col>
                <Col  md={10} lg={{span:8}} className=''>
                    <Row className='Title'>
                        <h1>Home: All Valorant Maps for Viper Lineups</h1>
                    </Row>
                    <Row className="Description">
                        <h3>
                        {Description}
                        </h3>
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
                        <Col lg={12} xl={{span:6, offset:3}} className='mt-3'>
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

