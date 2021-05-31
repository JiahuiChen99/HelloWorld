import React from "react";
import { Row, Col, Container } from "react-bootstrap";

// Image
import pyong from "../../Assets/pyong.gif"
import dev from "../../Assets/home_dev.svg"

function HomePage () {
    return (
        <section id="home">
            <Container fluid className="home">
                <Container id="home-greeting">
                    <Row>
                        <Col md={7} className="home-greeting-text d-flex align-items-center">
                            <div>
                                <Row className="home-greeting-height">
                                    <div>Hello World!</div>
                                    <img className="ml-4" src={pyong} alt="Pyong!" />
                                </Row>
                                <Row>
                                    <div> I AM <strong className="home-name">JIAHUI CHEN</strong></div>
                                </Row>
                            </div>
                        </Col>
                        <Col md={5}>
                            <img className="img-fluid" src={dev} alt="dev image"/>
                        </Col>
                    </Row>
                </Container>
                <Container id="home-introduction">

                </Container>
            </Container>
        </section>
    );
}

export default HomePage;