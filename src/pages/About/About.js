import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import baset from '../../images/baset-min.png';
import './About.css';

const About = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                <div data-aos="zoom-in-down" class="d-flex justify-content-center align-items-center">
                    <div class="ms-lg-5">
                        <h2>Hi there,</h2>
                        <p class="desc"> I am Baset, a full-stack web developer from Bangladesh. 
                        I am passionate about building excellent software that improves the lives of those around me. 
                        Python is my first programming language and I build some web applications using Python, Django, DRF, API. In my professional experience, I do some file conversions and automation using python.
                        I have also experience in Fiver and Upwork marketplaces. Now I am trying to learn more technologies and tools. So far I have finished some projects using React-js, Node-js, Express-js, MongoDB, Firebase, and many more.
                        
                        <br />
                        Programming is my passion. As a tech lover I am very much excited to write something about technologies, programming, and programming tools. I am trying to learn more technologies and tools and updated news. So that I can write some blog and people can know all of them by reading my blogs.
                        </p>
                    </div>
                </div>
                </Col>
                <Col md={6}>
                <div data-aos="zoom-in-up" class="d-flex flex-column justify-content-center align-items-center">
                    <div class="about-me">
                        <img style={{'height': '300px'}} class="img-fluid" src={baset} alt="" />
                    </div>
                    <div class="d-flex justify-content-around align-items-center social-link mt-4">
                        <a href="https://www.facebook.com/shuvro.baset.7/"><i className="social-icon fab fa-facebook"></i></a> 
                        <a href="https://www.linkedin.com/in/shuvro-baset/"><i className="social-icon fab fa-linkedin"></i></a> 
                        <a href="https://github.com/shuvro-baset"><i className="social-icon fab fa-github"></i></a> 
                        <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox"><i className="social-icon fab fa-google"></i></a>
                        <a href="https://twitter.com/shuvro_75"><i className="social-icon fab fa-twitter"></i></a>
                        <a href="https://join.skype.com/invite/ckRzc1LxCSu3"><i className="social-icon fa fa-skype" aria-hidden="true"></i></a>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;