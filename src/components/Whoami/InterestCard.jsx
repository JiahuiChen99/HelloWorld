import React from "react";
import "./InterestCard.css"

class InterestCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="d-flex flex-column">
                <img className="interest-image" src={ this.props.interest.image } alt={ this.props.interest.name } height="350"/>
                <div className="text-center font-weight-bold"> { this.props.interest.original_name } </div>
                <div className="text-center font-weight-light"> { this.props.interest.name } </div>
            </div>
        )
    }
}

export default InterestCard;