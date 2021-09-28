import React from "react";
import {Container} from "react-bootstrap";
import "./ScrollSpy.css";

class ScrollSpy extends React.Component {

    constructor(props) {
        super(props);

        this.whichSection = this.whichSection.bind(this);
    }

    whichSection(which) {
        this.props.goToSection(which);
    }

    render() {
        return (
            <Container className="right-menu d-flex flex-column font-weight-bold" fluid>
                <span onClick={() => this.whichSection(0)}>
                        More about me
                </span>
                <span onClick={() => this.whichSection(1)}>
                        Experience
                </span>
                <span onClick={() => this.whichSection(2)}>
                        Workflow
                </span>
            </Container>
        )
    }
}

export default ScrollSpy;