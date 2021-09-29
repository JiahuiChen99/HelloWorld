import React from "react";

class InterestCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src={ this.props.interest.image } alt={ this.props.interest.name }/>
                <div> { this.props.interest.original_name } </div>
                <div> { this.props.interest.name } </div>
            </div>
        )
    }
}

export default InterestCard;