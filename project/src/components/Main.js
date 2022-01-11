import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useNavigate,
    useParams
  } from "react-router-dom";
import Data from "../data"
import LeftSide from './LeftSide';
import Position from './Position';


export default function Main() {



    let navigate = useNavigate();

    let {map} = useParams();
    let result = "";
    if (map != null) {
        result = map.toLowerCase();
    }

    const MapArray = ["ascent", "bind", "breeze", "fracture", "haven", "icebox", "split"]

    //Använd useParams för att hämta rätt JSON information. Ascent: Postplant Viper Lineups
    const title = Data.map[result].title;
    const description = Data.map[result].description;
   

    const aSite = Data.map[result].positions.A_site.name;
    const aSite_1 = Data.map[result].positions.A_site.clip1;
    const aSite_2 = Data.map[result].positions.A_site.clip2;
    const aSite_Instructions = Data.map[result].positions.A_site.instructions.map((instruction) => <li>{instruction}</li>);
    const aSite_Image = Data.map[result].positions.A_site.siteImage;

    const bSite = Data.map[result].positions.B_site.name;
    const bSite_1 = Data.map[result].positions.B_site.clip1;
    const bSite_2 = Data.map[result].positions.B_site.clip2;
    const bSite_Instructions = Data.map[result].positions.B_site.instructions.map((instruction) => <li>{instruction}</li>);
    const bSite_Image = Data.map[result].positions.B_site.siteImage;

    function ThirdSite() {
        if (typeof Data.map[result].positions.C_site === 'object') {
            const cSite = Data.map[result].positions.C_site.name;
            const cSite_1 = Data.map[result].positions.C_site.clip1;
            const cSite_2 = Data.map[result].positions.C_site.clip2;
            const cSite_Instructions = Data.map[result].positions.C_site.instructions.map((instruction) => <li>{instruction}</li>);
            const cSite_Image = Data.map[result].positions.C_site.siteImage;
            return (
                <Container className='PositionBox'>
                        <Row className='Position'>
                            <h2>
                                {cSite}
                            </h2>
                        </Row>
                        <Row className=''>
                            <Col lg={12} xl={6}>
                                <video key={cSite_1} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                    <source src={cSite_1} type="video/mp4" />
                                </video>
                            </Col>
                            <Col lg={12} xl={6}>
                                <video key={cSite_2} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                <source src={cSite_2} type="video/mp4" />
                                </video>
                            </Col>
                        </Row>
                        <Row className=''>
                            <Col lg={12} xl={6}>
                                <ul className="instructions">{cSite_Instructions}</ul>
                            </Col>
                            <Col lg={12} xl={6}>
                                <img src={cSite_Image} width="100%" height="100%"/>
                            </Col>
                        </Row>

                    </Container>
            )
            
        }
        else {return <p/>}
    }

    function redirect() {
        console.log("We in here")
        navigate("/", {replace: true});
    }
    
    if(MapArray.includes(result)) {
        console.log("result matched MapArray")
        return ( 
            <Container fluid className='d-flex flex-wrap flex-column'>
            <Row>
            <Col sm={0} md={2} className='Leftside d-none d-lg-block'>
                <LeftSide />
            </Col>
            <Col  md={12} lg={8} className='Main' id="main">
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

                        <Container className='PositionBox'>
                            <Row className='Position'>
                                <h2>
                                {aSite}
                                </h2>
                            </Row>
                            <Row className=''>
                                <Col lg={12} xl={6}>
                                    <video key={aSite_1} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                        <source src={aSite_1} type="video/mp4" />
                                    </video>
                                </Col>
                                <Col lg={12} xl={6}>
                                    <video key={aSite_2} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                        <source src={aSite_2} type="video/mp4" />
                                    </video>
                                </Col>
                            </Row>
                            <Row className=''>
                                <Col lg={12} xl={6}>
                                    <ul className="instructions">{aSite_Instructions}</ul>
                                </Col>
                                <Col lg={12} xl={6}>
                                    <img src={aSite_Image} width="100%" height="100%"/>
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
                                <Col lg={12} xl={6}>
                                    <video key={bSite_1} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                        <source src={bSite_1} type="video/mp4" />
                                    </video>
                                </Col>
                                <Col lg={12} xl={6}>
                                    <video key={bSite_2} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                                    <source src={bSite_2} type="video/mp4" />
                                    </video>
                                </Col>
                            </Row>
                            <Row className=''>
                                <Col lg={12} xl={6}>
                                    <ul className="instructions">{bSite_Instructions}</ul>
                                </Col>
                                <Col lg={12} xl={6}>
                                    <img className="instructions" src={bSite_Image} width="100%" height="100%"/>
                                </Col>
                            </Row>

                        </Container>

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
    else {
        return (
            <div>{redirect}</div>
        )    
    }
}