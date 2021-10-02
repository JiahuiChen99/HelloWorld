import React, {useRef} from "react";
import Particle from "../Particle";
import "./Whoami.css"
import Experience from "./Experience";
import Workflow from "./Workflow";
import ScrollSpy from "./ScrollSpy";
import AboutMe from "./AboutMe";

function Whoami() {
    const moreaboutme = useRef(null)
    const experience = useRef(null)
    const workflow = useRef(null)

    const goToSection = (which) => {
        switch (which) {
            case 0:
                moreaboutme.current.scrollIntoView({block: 'start', inline: 'center', behavior: 'smooth'})
                break;
            case 1:
                experience.current.scrollIntoView({block: 'start', inline: 'center', behavior: 'smooth'})
                break;
            case 2:
                workflow.current.scrollIntoView({block: 'start', inline: 'center', behavior: 'smooth'})
                break;
            default:
        }
    }

    return (
        <section id="whoami">
            <Particle/>
            <ScrollSpy goToSection={goToSection}/>
            <section id="moreaboutme" ref={moreaboutme}>
                <AboutMe/>
            </section>
            <section id="experience" ref={experience}>
                <Experience/>
            </section>
            <section id="workflow" ref={workflow}>
                <Workflow/>
            </section>
        </section>
    );
}

export default Whoami;