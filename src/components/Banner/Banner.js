import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
    return (
        <Container fluid>
            <Row className="banner-div d-flex justify-content-center">
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <h2>Hi! I am <span style={{ color: '#e12454', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Shuvro Baset', 'Tech-Blogger']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span></h2>
                    <h4>
                        
                        <span style={{ color: '#e12454', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Full-Stack Web Developer', 'Python Developer', 'React Developer']}
                            loop={true}
                            cursor
                            cursorStyle='..'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span>
                    </h4>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Banner;