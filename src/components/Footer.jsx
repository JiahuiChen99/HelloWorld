import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Icons
import { AiFillGithub, AiFillLinkedin } from "react-icons/all";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                <Col className="footer-info" md="4"> Designed and Developed by Jiahui </Col>
                <Col className="footer-info" md="4"> Copyright @ { year }</Col>
                <Col className="footer-info" md="4">
                    <a className="icons_contact_colour" href="https://www.linkedin.com/in/jiahui-chen-123941180/"> <AiFillLinkedin/> </a>
                    <a className="icons_contact_colour" href="https://github.com/JiahuiChen99"> <AiFillGithub/> </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;