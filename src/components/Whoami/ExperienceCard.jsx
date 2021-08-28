import React from "react";

class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="bg-dark h-100" key={ this.props.experience.id }>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h1 className="card-title font-weight-bold"> { this.props.experience.title}</h1>
                        <span className="badge bg-secondary align-self-center text-uppercase">
                            <h4>
                                { this.props.experience.type }
                            </h4>
                        </span>
                    </div>

                    <p className="fs-1"> { this.props.experience.brief_desc } </p>
                </div>
            </div>
        )
    }
}

export default ExperienceCard;