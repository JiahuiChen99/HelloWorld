import React from "react";
import './ExperienceCard.css';

class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="experience-card bg-dark h-100 m-3 p-3 rounded">
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                        <h1 className="card-title font-weight-bold"> { this.props.experience.title}</h1>
                        <span className="badge bg-secondary align-self-center text-uppercase ml-5">
                            <h4 className="m-2 font-weight-bold">
                                { this.props.experience.type }
                            </h4>
                        </span>
                    </div>

                    <h4> { this.props.experience.brief_desc } </h4>
                </div>
            </div>
        )
    }
}

export default ExperienceCard;