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

                // Remove forked projects
                let projects = response.data;
                projects.forEach( (project, index, projects) => {
                    if ( project.fork) {
                        projects.splice(index, 1);
                    }
                })

                this.setState({
                    projects : projects
                });
        });

    }

    render() {
        return (
            <section id="project">
                <Particle/>
                <Container className="d-flex justify-content-center mt-5">
                    <Row md={12}>
                        <h1 className="project-featured-title"><strong>Featured Projects</strong></h1>
                        <Row>
                            {
                                this.state.projects.map( (project, index) => (
                                    <Col className="my-5" md={4} key={index} >
                                        <ProjectCard project={project} key={index}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Project;