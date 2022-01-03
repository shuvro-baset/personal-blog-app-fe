import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Programming.css';

const Programming = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <div>
                        <button className="btn tech-button m-2">Python</button>
                        <button className="btn tech-button m-2">Django</button>
                        <button className="btn tech-button m-2">DRF</button>
                        <button className="btn tech-button m-2">JavaScript</button>
                        <button className="btn tech-button m-2">ReactJs</button>
                        <button className="btn tech-button m-2">NodeJs</button>
                        <button className="btn tech-button m-2">HTML</button>
                        <button className="btn tech-button m-2">CSS</button>
                        <button className="btn tech-button m-2">BootStrap</button>
                        <button className="btn tech-button m-2">MySql</button>
                        <button className="btn tech-button m-2">PostgreSql</button>
                        <button className="btn tech-button m-2">MongoDB</button>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Programming;