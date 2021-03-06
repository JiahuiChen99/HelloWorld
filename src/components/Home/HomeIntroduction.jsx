import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

// Image
import bananyako from "../../Assets/bananyako.png";

const HomeIntroduction = React.forwardRef((props, ref) => {

    return(
        <div ref={ref}>
            <Container className="d-flex align-items-center" id="home-introduction">
                <Row>
                    <Col md={4} className="d-flex align-items-center">
                        <img className="img-fluid" src={bananyako} alt="bananyako"/>
                    </Col>
                    <Col md={8}>
                        <h1> LET ME <span className="home-text-highlight">INTRODUCE</span> MYSELF</h1>
                        <p className="home-text-introduction mt-5">
                            I first started coding in my first year of <span className="home-text-highlight">Computer Engineering</span> major
                            <br/>
                            <br/>
                        </p>

                        <div className="d-flex justify-content-center">
                            <div className="home-text-introduction d-flex flex-column">
                                <span>do</span>
                                <span className="ml-4">Programming</span>
                                <span>&#125; while (Alive)</span>
                            </div>
                        </div>

                        <p className="home-text-introduction">
                            <br/>
                            <br/>
                            Right now I am interested in <span className="home-text-highlight">Front-end</span> development with Modern JavaScript Frameworks,
                            but eventually I would like become a <span className="home-text-highlight">Full-stack</span> Software Engineer
                            <br/>
                            <br/>
                            Thinking outside the box is coded in my &lt;DNA/&gt;
                        </p>

                        <LinkContainer to="/whoami">
                            <div className="d-flex justify-content-center mt-md-5 mb-sm-5 mb-5">
                                <a type="button" className="btn btn-lg btn-outline-primary"> Learn more about me </a>
                            </div>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
});

export default HomeIntroduction;