import React from "react";
import './ProjectCard.css'

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card bg-dark" key={ this.props.id } >
                <div className="card-body">
                    <h5 className="card-title text-primary">{ this.props.project.name }</h5>
                    <p className="card-text text-warning">{ this.props.project.description}</p>
                </div>
            </div>
        );
    }
}

export default ProjectCard;