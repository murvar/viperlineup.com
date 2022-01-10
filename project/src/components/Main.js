import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import Data from "../data"
import LeftSide from './LeftSide';


export default function Main() {

    let {map} = useParams();
    let result = "";
    if (map != null) {
        result = map.toLowerCase();
    }

    //Använd useParams för att hämta rätt JSON information. Ascent: Postplant Viper Lineups
    const title = Data.map[result].title;
    const description = Data.map[result].description;
    const aSite = Data.map[result].positions.A_site.name;
    const aSite_1 = Data.map[result].positions.A_site.clip1;
    const aSite_2 = Data.map[result].positions.A_site.clip2;
    const bSite = Data.map[result].positions.B_site.name;

    return ( 
        <Container fluid>
        <Row>
          <Col sm={0} md={2} className='Leftside d-none d-lg-block'>
            <LeftSide />
          </Col>
          <Col md={12} lg={8} className='Main'>
                <Container>

                    <Row className='Title' id="pageTitleRow">
                        <Col>
                            <h1 id="pageTitle">
                                {title}
                            </h1>
                        </Col>
                    </Row>
                    <Row className='Description'>
                        <h3>
                        {description}
                        </h3>
                    </Row>
                    <Container className='PositionBox'>
                        <Row className='Position'>
                            <h2>
                               {aSite}
                            </h2>
                        </Row>
                        <Row className=''>
                            <Col>
                                <video width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                    <source src={aSite_1} type="video/mp4" />
                                </video>
                            </Col>
                            <Col md={6}>
                                <video width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                    <source src={aSite_2} type="video/mp4" />
                                </video>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='PositionBox'>
                        <Row className='Position'>
                            <h2>
                                {bSite}
                            </h2>
                        </Row>
                        <Row className=''>
                            <Col>
                                <video width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                    <source src="video/A_Bind_1.mp4" type="video/mp4" />
                                </video>
                            </Col>
                            <Col>
                                <video width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                <source src="video/A_Bind_2.mp4" type="video/mp4" />
                                </video>
                            </Col>
                        </Row>
                        <Row className='BottomBanner'>
                            <Col>
                                <p>Banner</p>
                            </Col>
                        
                        </Row>
                    </Container>

                </Container>
          </Col>
          
          <Col sm={0} md={2} className='SideBanner d-none d-lg-block'>
            <p>Banner</p>
          </Col>
        </Row>
      </Container>
    
    )
}