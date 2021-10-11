import React from "react";
import './ExperienceCard.css';
import {Col, Row} from "react-bootstrap";

class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopUp: this.props.showPopUp
        }

        this.togglePopUp = this.togglePopUp.bind(this);
    }

    togglePopUp() {
        this.setState((prevState) => {
            return { showPopUp: !prevState.showPopUp }
        }, () => {
            // Send data back to parent component once the toggle status is updated
            this.props.onPopUp(this.state.showPopUp, this.props.experience.id);
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState(() => {
            return { showPopUp: nextProps.showPopUp}
        })
    }

    render() {
        return(
            <div className="experience-card bg-dark h-100 my-3 p-3 rounded" onClick={ this.togglePopUp }>
                <div className="card-body">
                    <Row className="d-flex flex-wrap mb-3">
                        <Col className="col-12 col-lg-9">
                            <h1 className="card-title font-weight-bold"> { this.props.experience.title }</h1>
                        </Col>
                        <Col className="col-lg-3">
                            <span className="badge bg-secondary text-uppercase experience-card-badge">
                                <h4 className="m-2 font-weight-bold">
                                    { this.props.experience.type }
                                </h4>
                            </span>
                        </Col>
                    </Row>

                    <h4> { this.props.experience.brief_desc } </h4>
                </div>
            </div>
        )
    }
}

export default ExperienceCard;