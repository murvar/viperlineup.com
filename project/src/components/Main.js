import React from 'react';
import { useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    useNavigate,
    useParams
  } from "react-router-dom";
import Data from "../data"
import LeftSide from './LeftSide';
import Position from './Position';


export default function Main(map) {

    console.log(map)
    let result = map.map;
    



    //Använd useParams för att hämta rätt JSON information. Ascent: Postplant Viper Lineups
    
    const title = Data.map[result].title;
    const description = Data.map[result].description;

    function ThirdSite() {
        if (typeof Data.map[result].positions.C_site === 'object') {
            return (
                <Position position = {Data.map[result].positions.C_site} />

            )
            
        }
        else {return <p/>}
    }


    console.log("result matched MapArray")
    return ( 
        <Container fluid className='d-flex flex-wrap flex-column'>
        <Row>
        <Col sm={0} md={2} className='Leftside d-none d-lg-block'>
            <LeftSide className="sidebar"/>
        </Col>
        <Col  md={12} lg={{span:8, offset:2}} className='Main' id="main">
                <Container>
                    <Container className="d-block d-lg-none">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle dropbtn fixed-top" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Maps
                            </button>
                            <div className="dropdown-content fixed-top w-50">
                            <LeftSide/>
                            </div>
                        </div>
                    </Container>
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
                    <Position position = {Data.map[result].positions.A_site} />
                    <Position position = {Data.map[result].positions.B_site} />
                    <ThirdSite />
                        
                    <Row className='BottomBanner fixed-bottom'>
                        <Col>
                            <p>Banner</p>
                        </Col>

                    </Row>

                </Container>
        </Col>
        
        <Col sm={0} md={2} className='SideBanner d-none d-lg-block'>
            <p>Banner</p>
        </Col>
        </Row>
    </Container>
    
    )
}