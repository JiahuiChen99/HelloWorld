import React from "react";
import Container from "react-bootstrap/Container";
import Particle from "../Particle";
import "./Whoami.css"

function Whoami() {


    return (
        <section id="whoami">
            <Container fluid className="whoami">
                <Particle/>
                <div>Hello</div>
            </Container>
        </section>
    );
}

export default Whoami;