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
                        <Col xs={{ span : 6, offset : 3}}>
                            <h1 id="pageTitle">
                                {title}
                            </h1>
                        </Col>
                    </Row>
                    <Row className='Description'>
                        <div>
                            <h2>
                            {description}
                            </h2>
                        </div>
                    </Row>
                    <Container className='PositionBox'>
                        <Row className='Position'>
                            <h3>
                               {aSite}
                            </h3>
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
                            <h3>
                                {bSite}
                            </h3>
                        </Row>
                        <Row className=''>
                            <Col>
                                <img src="val2.jpg" width="250" height="300"/>
                            </Col>
                            <Col>
                                <img src="val1.jpg" width="250" height="300"/>
                            </Col>
                        </Row>
                    </Container>
                </Container>
          </Col>
          
          <Col xs={2} className='Add'>
            <p>Banner</p>
          </Col>
        </Row>
      </Container>
        
    )
}