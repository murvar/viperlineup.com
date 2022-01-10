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
    const title = Data.map[result].title
    const description = Data.map[result].description
    const aSite = Data.map[result].positions.A_site
    const bSite = Data.map[result].positions.B_site

    return ( 
        <Container fluid>
        <Row>
          <Col xs={2} className='Leftside'>
            <LeftSide />
          </Col>
          <Col xs={8} className='Main'>
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
                                <img src="val1.jpg" width="250" height="300"/>
                            </Col>
                            <Col>
                                <img src="val2.jpg" width="250" height="300"/>
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
                                <img src="val2.jpg" width="250" height="300"/>
                            </Col>
                            <Col>
                                <img src="val1.jpg" width="250" height="300"/>
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
          
          <Col xs={2} className='SideBanner'>
            <p>Banner</p>
          </Col>
        </Row>
      </Container>
        
    )
}