import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import Data from "../data"
import LeftSide from './LeftSide';
import Position from './Position';
import HamburgerMenu from './HamburgerMenu';
import SideBanner from './SideBanner';
import {Helmet} from "react-helmet";
import Footer from "./Footer";
import Ad from "./Ad";



export default function Main(map) {
    window.scrollTo(0,0);

    let result = map.map;

    const title = Data.map[result].title;
    const description = Data.map[result].description;
    const metaDescription = Data.map[result].metaDescription;

    function ThirdSite() {
        if (typeof Data.map[result].positions.C_site === 'object') {
            return (
                <Position position = {Data.map[result].positions.C_site} />
            )
        }
        else {return <p/>}
    }

    return ( 
        
        <Container fluid className='d-flex flex-wrap flex-column'>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
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
                <Col  md={12} lg={{span:8, offset:2}} className='Main' id="main">
                        <Container>
                            <Row className='Title mt-3' id="pageTitleRow">
                                <Col>
                                    <h1 id="pageTitle">
                                        {title}
                                    </h1>
                                </Col>
                            </Row>
                            <Row className='Description mt-3'>
                                <p>
                                {description}
                                </p>
                            </Row>
                            <Position position = {Data.map[result].positions.A_site} />
                            <Row>
                                <Ad path="2975221930" format="fluid"/>
                            </Row>
                            <Position position = {Data.map[result].positions.B_site} />
                            <ThirdSite />
                            <Row>
                                <Ad path="6201958998" format="fluid"/>

                            </Row>

                            <Row>
                                <Footer />
                            </Row>
                                
                            

                        </Container>
                </Col>
                
                <Col sm={0} md={2} className='SideBanner d-none d-lg-block'>
                    <SideBanner />
                </Col>
            </Row>
        </Container>
    
    )
}