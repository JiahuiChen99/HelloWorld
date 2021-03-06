import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Modal} from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import ExperienceCard from "./ExperienceCard";

import { experiences } from "../../Assets/data";

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
                description: ""
            },
            {
                id: 1,
                title: "Build@Mercari (株式会社メルカリ)",
                type: "Apprenticeship",
                brief_desc: "Improve software engineering skills through the training",
                tags: [],
                description: ""
            },
        ];

        this.state = {
            showPopUp: false,
            whichExperience: 0
        }

    }

    componentDidMount() {
        experiences.map((value, index) => {
            fetch(process.env.PUBLIC_URL + value).then(response => {
                return response.text();
            }).then(text => {
                this.experience[index].description = text;
            }).catch(err => {
                console.log(err);
            })
            return null
        });
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
            <Container className="d-flex flex-column justify-content-center mt-5">
                <h1 className="mb-3 font-weight-bold">Experience</h1>
                <Col>
                    {
                        this.experience.map( (exp, id) => (
                            <Row key={id} >
                                <ExperienceCard showPopUp={ this.state.showPopUp } onPopUp={ this.onPopUp } key={id} experience={exp}/>
                            </Row>
                        ))
                    }
                </Col>
                <Modal className="modal-scroll" scrollable={true} show={ this.state.showPopUp } onHide={ this.handleClose } centered size="lg" keyboard={true}>
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
                    <Modal.Body>
                        <ReactMarkdown remarkPlugins={[remarkGfm]} children={this.experience[this.state.whichExperience].description}/>
                    </Modal.Body>
                </Modal>
            </Container>
        );
    }

}

export default Experience;