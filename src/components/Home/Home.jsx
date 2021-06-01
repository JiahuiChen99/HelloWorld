import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {IoCaretDown} from "react-icons/all";
import HomeIntroduction from "./HomeIntroduction";

// Image
import pyong from "../../Assets/pyong.gif";
import dev from "../../Assets/home_dev.svg";

class HomePage extends React.Component{
    goToIntroduction() {
        console.log("Go To Introduction");
    }

    render() {
        return (
            <section id="home">
                <Container fluid className="home">
                    <Container id="home-greeting" className="d-flex flex-column justify-content-center">
                        <Row className="home-greeting d-flex align-items-center">
                            <Col md={7} className="home-greeting-text ">
                                <div>
                                    <Row>
                                        <div>Hello World!</div>
                                        <img className="ml-4" src={pyong} alt="Pyong!" />
                                    </Row>
                                    <Row>
                                        <div> I AM <strong className="home-name">JIAHUI</strong></div>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={5} className="align-content-center">
                                <img className="img-fluid" src={dev} alt="dev"/>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center home-go-to-introduction">
                            <IoCaretDown size={90} onClick={this.goToIntroduction}/>
                        </Row>
                    </Container>

                    <HomeIntroduction/>

                </Container>
            </section>
        );
    }
}

export default HomePage;