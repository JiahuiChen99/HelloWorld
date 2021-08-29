import React from "react";
import Container from "react-bootstrap/Container";
import Particle from "../Particle";
import "./Whoami.css"
import Experience from "./Experience";

function Whoami() {


    return (
        <section id="whoami">
            <Particle/>
            <Experience/>
        </section>
    );
}

export default Whoami;