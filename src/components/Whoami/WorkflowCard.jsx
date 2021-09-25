import React from "react";

class WorkflowCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex flex-column tech-card p-3 m-1">
                <img className="tech-card-img mb-3" src={ this.props.tech.logo }  alt={ this.props.tech.name } width="100" height="100"/>
                <div className="tech-card-name font-weight-bold mb-3"> { this.props.tech.name } </div>
                <p className="tech-card-text h-100"> { this.props.tech.description }</p>
                <div className="d-flex exp row m-0 align-self-end">
                    <div className="col exp-1"/>
                    <div className="col exp-2"/>
                    <div className="col exp-3"/>
                </div>
            </div>
        )
    }
}

export default WorkflowCard;