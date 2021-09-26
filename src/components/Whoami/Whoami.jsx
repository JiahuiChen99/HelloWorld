import React from "react";
import Particle from "../Particle";
import "./Whoami.css"
import Experience from "./Experience";
import Workflow from "./Workflow";
import ScrollSpy from "./ScrollSpy";

function Whoami() {


    return (
        <section id="whoami">
            <Particle/>
            <ScrollSpy/>
            <Experience/>
            <Workflow/>
        </section>
    );
}

export default Whoami;