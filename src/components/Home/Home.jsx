import React, { useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { IoCaretDown } from "react-icons/all";
import Particle from "../Particle";
import HomeIntroduction from "./HomeIntroduction";

// Image
import pyong from "../../Assets/pyong.gif";
import dev from "../../Assets/home_dev.svg";

function HomePage() {

    const childRef = useRef(null);

    const scrollIntoView = () => {
        childRef.current.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
    }

    return (
        <section id="home">
            <Container fluid className="home">
                <Particle/>
                <Container id="home-greeting" className="d-flex flex-column justify-content-center">
                    <Row className="home-greeting d-flex align-items-center">
                        <Col md={7} className="home-greeting-text ">
                            <div>
                                <Row>
                                    <div>Hello World!</div>
                                    <img className="ml-4" src={pyong} alt="Pyong!" />
                                </Row>
                                <Row>
                                    <div className="home-whoami"> I AM <strong className="home-name">JIAHUI CHEN</strong></div>
                                </Row>
                            </div>
                        </Col>
                        <Col md={5} className="align-content-center">
                            <img className="img-fluid" src={dev} alt="dev"/>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center home-go-to-introduction home-chevron">
                        <IoCaretDown title="Introduction" className="home-go-to-introduction-arrow" size={90} onClick={scrollIntoView}/>
                    </Row>
                </Container>

                <HomeIntroduction ref={childRef}/>

            </Container>
        </section>
    );
}

export default HomePage;