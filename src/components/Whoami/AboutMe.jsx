import React from "react";
import {Accordion, Card, Container, Row} from "react-bootstrap";
import {BsBook, IoGameControllerOutline, IoMusicalNoteOutline, RiMovieLine} from "react-icons/all";

import {interests} from "../../Assets/data";
import InterestCard from "./InterestCard";

class AboutMe extends React.Component {

    render() {
        return(
            <Container className="mt-5 text-justify lead">
                <h1 className="font-weight-bold">More about me</h1>

                <p>I am currently in my senior year of Computer Engineering and my ultimate goal is to become a Software Engineer. <br/>
                    For now I am focusing on Front-end but Back-end also draws my attention. <br/>
                    I am passionate about technology and understanding the nitty-gritty of computers fascinates me 👀
                </p>

                <p>
                    Engineering is fun but selfcare and wellness is also important. I do physical exercise everyday if possible and also eat healthy food 🍏.
                </p>

                <p>
                    My dream is to enrol on a postgraduate master degree to study abroad, in Japan in 2022 .
                    That is the reason why I am self teaching Japanese. I hope to get the JLPT N5 as soon as possible  🤓
                </p>

                <h2>Interests</h2>
                <p>
                    Apart from doing side projects, I am also a big fan of Japanese MAGI culture
                </p>

                <Accordion>
                    <Card className="bg-dark">
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <BsBook className="mr-2"/>
                                Manga
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="bg-dark">
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <RiMovieLine className="mr-2"/>
                                Anime
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {
                                    interests.anime.map( (interest, index) => {
                                            return <InterestCard interest={ interest }/>
                                        }
                                    )
                                }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="bg-dark">
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                <IoGameControllerOutline className="mr-2"/>
                                Games
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                {
                                    interests.games.map( (interest, index) => {
                                            return <InterestCard interest={ interest }/>
                                        }
                                    )
                                }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="bg-dark">
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                <IoMusicalNoteOutline className="mr-2"/>
                                Idols
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="justify-content-center">
                                {
                                    interests.idols.map( (interest, index) => {
                                        return <InterestCard interest={ interest }/>
                                        }
                                    )
                                }
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        )
    }
}
export default AboutMe;