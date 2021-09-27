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
                    <span> More about me </span>
                    <span> Experience </span>
                    <span> Workflow </span>
            </Container>
        )
    }
}

export default ScrollSpy;