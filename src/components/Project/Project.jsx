import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Particle from "../Particle";

function Project() {
    {/* Fetch Github API for Projects*/}

    return(
        <section id="project">
            <Particle/>
            <Container className="d-flex justify-content-center">
                <Col md={12}>
                    <Row className="d-flex align-items-center">
                        <Col md={12} className="full-height d-flex align-items-center">
                            <h1 className="project-featured-title">Featured Projects</h1>
                            {/* Featured Projects Component */}
                        </Col>
                    </Row>
                    <Row md={12} className="full-height">
                        <h1 className="project-featured-title"><strong>Other Noteworthy Projects</strong></h1>
                    </Row>
                </Col>
            </Container>
        </section>
    );
}

export default Project;