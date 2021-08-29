import React from "react";
import Container from "react-bootstrap/Container";
import ExperienceCard from "./ExperienceCard";
import {Col, Row} from "react-bootstrap";

function Experience() {
    const experience = [
        {
            id: 0,
            title: "Teacher Assistant in Systems Administration & Design @ La Salle URL",
            type: "Internship",
            brief_desc: "In charge of designing & developing the projects, labs correction and helping students solve their duties",
            tags: ["C", "LKM", "Linux", "Raspberry Pi"],
            description: "The 1st project consists in building a Linux Kernel Module (LKM) to be deployed in a Raspberry Pi Zero W. The device works as a character device driver where the user can perform reads and writes"
        },
        {
            id: 1,
            title: "Build@Mercari (株式会社メルカリ)",
            type: "Apprenticeship",
            brief_desc: "Improve software engineering skills through the training",
            tags: [],
            description: "Improve software engineering skills through the training\n" +
                "\n" +
                "Values from Build@Mercari:\n" +
                "- Study lots of Udemy courses\n" +
                "- Met new friends from around the world\n" +
                "- Mercari Engineering culture & DI philosophy"
        },
    ];

    return (
        <Container className="d-flex flex-column justify-content-center">
            <Col>
                {
                    experience.map( (exp, id) => (
                        <Row>
                            <ExperienceCard key={id} experience={exp}/>
                        </Row>
                    ))
                }
            </Col>
        </Container>
    );
}

export default Experience;