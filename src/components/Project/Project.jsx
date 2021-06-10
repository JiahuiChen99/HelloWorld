import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Particle from "../Particle";
import axios from "axios";
import ProjectCard from "./ProjectCard";

class Project extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            repositories : {
                url: 'https://api.github.com/users/JiahuiChen99/repos',
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            },
            projects : [],
        }
    }

    // Fetch Github API for Projects with Axios API
    componentDidMount() {
        axios(this.state.repositories)
            .then( response => {
                console.log(response.data);

                this.setState({
                    projects : response.data
                });

                console.log(this.state.projects);
            });
    }

    render() {
        return (
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
                            <Row>
                                {
                                    this.state.projects.map( (project, index) => (
                                        <Col md={4} key={index}>
                                            <ProjectCard project={project} key={index}/>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Row>
                    </Col>
                </Container>
            </section>
        );
    }
}

export default Project;