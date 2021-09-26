import React from "react";
import {Container, Row} from "react-bootstrap";
import "./ScrollSpy.css";

class ScrollSpy extends React.Component {
    render() {
        return (
            <Container className="right-menu d-flex flex-column font-weight-bold" fluid>
                    <span> More about me </span>
                    <span> Experience </span>
                    <span> Workflow </span>
            </Container>
        )
    }
}

export default ScrollSpy;