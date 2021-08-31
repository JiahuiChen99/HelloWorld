import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

import ExperienceCard from "./ExperienceCard";
import ExperiencePopUp from "./ExperiencePopUp";

class Experience extends React.Component {

    constructor(props) {
        super(props);

        this.experience = [
            {
                id: 0,
                title: "Teacher Assistant in Systems Administration & Design @ La Salle URL",
                type: "Internship",
                brief_desc: "In charge of designing & developing the projects, labs correction and helping students solve their duties",
                tags: ["C", "LKM", "Linux", "Raspberry Pi"],
                description: "The 1st project consists in building a Linux Kernel Module (LKM) to be deployed in a Raspberry Pi Zero W. The device works as a character device driver where the user can perform reads and writes"
            },
            {
                id: 1,
                title: "Build@Mercari (株式会社メルカリ)",
                type: "Apprenticeship",
                brief_desc: "Improve software engineering skills through the training",
                tags: [],
                description: "Improve software engineering skills through the training\n" +
                    "\n" +
                    "Values from Build@Mercari:\n" +
                    "- Study lots of Udemy courses\n" +
                    "- Met new friends from around the world\n" +
                    "- Mercari Engineering culture & DI philosophy"
            },
        ];

        this.state = {
            showPopUp: false,
            whichExperience: 0
        }
    }

    onPopUp = (show, experienceID) => {
        this.setState( () => {
            return {
                showPopUp: show,
                whichExperience: experienceID
            }
        });
    }

    handleClose = () => {
        // Reset parent toggle
        this.setState((prevState) => {
            return { showPopUp: !prevState.showPopUp }
        })
    }

    render() {
        return (
            <Container className="d-flex flex-column justify-content-center">
                <h1 className="ml-3 mb-3 font-weight-bold">Experience</h1>
                <Col>
                    {
                        this.experience.map( (exp, id) => (
                            <Row key={id} >
                                <ExperienceCard onPopUp={ this.onPopUp } key={id} experience={exp}/>
                            </Row>
                        ))
                    }
                </Col>
                <Modal show={ this.state.showPopUp } onHide={ this.handleClose } centered size="lg" keyboard={true}>
                    <Modal.Header closeButton>
                        <Col>
                            <Row>
                                <Modal.Title className="font-weight-bold"> { this.experience[this.state.whichExperience].title } </Modal.Title>
                            </Row>
                            <Row>
                                {
                                    this.experience[this.state.whichExperience].tags.map((tag, index) => (
                                        <span key={index} className="badge bg-secondary m-1 p-2"> { tag } </span>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Modal.Header>
                    <Modal.Body><p> { this.experience[this.state.whichExperience].description } </p></Modal.Body>
                </Modal>
            </Container>
        );
    }

}

export default Experience;