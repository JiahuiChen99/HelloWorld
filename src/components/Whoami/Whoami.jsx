import React from "react";
import Particle from "../Particle";
import "./Whoami.css"
import Experience from "./Experience";
import Workflow from "./Workflow";

function Whoami() {


    return (
        <section id="whoami">
            <Particle/>
            <Experience/>
            <Workflow/>
        </section>
    );
}

export default Whoami;