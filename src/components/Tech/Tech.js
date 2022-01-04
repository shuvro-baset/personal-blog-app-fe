import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import web from '../../images/web-programming.png';
import app from '../../images/application.png';
import programmer from '../../images/programmer.png';
import mobile from '../../images/mobile-coding.png';
import dev from '../../images/development.png';
import analytics from '../../images/web-analytics.png';

const Tech = () => {
    return (
        <Container>
            <h1> I love New Technologies, Programming, Coding.</h1>
            <Row className="my-5">
                <Col md={4}>
                    <img className="img-fluid  rounded" src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column justify-content-center align-content-center">
                        <img className="img-fluid my-2 rounded" src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <img className="img-fluid my-2 rounded" src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <img className="img-fluid  rounded" src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </Col>
            </Row>
            <Row className="my-5">
                <Col md={2}>
                    <img className="img-fluid my-2 rounded" src={web} alt="" />
                </Col>
                <Col md={2}>
                    <img className="img-fluid my-2 rounded" src={app} alt="" />
                </Col>
                <Col md={2}>
                    <img className="img-fluid my-2 rounded" src={programmer} alt="" />
                </Col>
                <Col md={2}>
                    <img className="img-fluid my-2 rounded" src={mobile} alt="" />
                </Col>
                <Col md={2}>
                    <img className="img-fluid my-2 rounded" src={dev} alt="" />
                </Col>
                <Col md={2}>
                    <img className="img-fluid my-2 rounded" src={analytics} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Tech;