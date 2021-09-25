import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import WorkflowCard from "./WorkflowCard";
import "./WorkflowCard.css";
import {techStack} from "../../Assets/data";


class Workflow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="mt-5">
                <h1 className="ml-3 mb-3 font-weight-bold">Workflow</h1>
                <h2 className="ml-3 mb-3 font-weight-bold text-center">Programming Languages</h2>
                <Row className="row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
                    {
                        techStack.languages.map( (tech, index) => (
                            <Col className="d-flex justify-content-center my-3">
                                <WorkflowCard key={ index } tech={ tech }/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }
}

export default Workflow;