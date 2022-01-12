import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Position(position) {
    position = position.position;
    const site = position.name;
    const clip_1 = position.clip1;
    const clip_2 = position.clip2;
    const site_Instructions = position.instructions.map((instruction) => <li key={instruction}>{instruction}</li>);
    const site_Image = position.siteImage;

    return (
        <Container className='PositionBox'>
            <Row className='Position mt-3'>
                <h2>
                    {site}
                </h2>
            </Row>
            <Row className=''>
                <Col lg={12} xl={6} className=''>
                    <video key={clip_1} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                        <source src={clip_1} type="video/mp4" />
                    </video>
                </Col>
                <Col lg={12} xl={6} className='mt-3'>
                    <video key={clip_2} width="100%" height="100%" autoPlay={true} loop={true} muted={true} playsInline={true}>
                    <source src={clip_2} type="video/mp4" />
                    </video>
                </Col>
            </Row>
            <Row className=''>
                <Col lg={12} xl={6} className=''>
                    <ol className="instructions">{site_Instructions}</ol>
                </Col>
                <Col lg={12} xl={6} className='h-25'>
                    <img src={site_Image} alt="where viper postplant molly lineup lands" width="100%" height="100%"/>
                </Col>
            </Row>

        </Container>
    )
}