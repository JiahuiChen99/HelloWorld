import React from "react";

class WorkflowCard extends React.Component {

    constructor(props) {
        super(props);

        this.exp = (slot) => {
            if (slot === 1 && this.props.tech.experience >= 1) {
                return "#FF0D0D";
            }
            if (slot === 2 && this.props.tech.experience >= 2) {
                return "#FF8E15";
            }
            if (slot === 3 && this.props.tech.experience >= 3) {
                return "#69B34C";
            }
        }
    }

    render() {
        return (
            this.props.tech.language ?
                <div className="d-flex flex-column tech-card p-3 m-1">
                    <img className="tech-card-img mb-3" src={ process.env.PUBLIC_URL + this.props.tech.logo }  alt={ this.props.tech.name } width="100" height="100"/>
                    <div className="tech-card-name font-weight-bold mb-3"> { this.props.tech.name } </div>
                    <p className="tech-card-text h-100"> { this.props.tech.description }</p>
                    <div className="d-flex exp row m-0 align-self-end">
                        <div className="col exp-1" style={{ backgroundColor: this.exp(1) }}/>
                        <div className="col exp-2" style={{ backgroundColor: this.exp(2) }}/>
                        <div className="col exp-3" style={{ backgroundColor: this.exp(3) }}/>
                    </div>
                </div>
                :
                <div className="d-flex flex-column tech-card p-3 m-1 justify-content-center align-items-center">
                    <img src={ process.env.PUBLIC_URL + this.props.tech.logo }  alt={ this.props.tech.name } width="100" height="100"/>
                    <div className="mt-2 font-weight-bold tech-name"> { this.props.tech.name } </div>
                </div>
        )
    }
}

export default WorkflowCard;