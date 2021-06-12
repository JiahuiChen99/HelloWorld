import React from "react";
import './ProjectCard.css'
import axios from "axios";

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            languages : {}
        }
    }

    componentDidMount() {
        axios.get(this.props.project.languages_url)
            .then( response => {
                this.setState({
                    languages : response.data
                })
        });
    }

    render() {
        const languages = Object.keys(this.state.languages);

        return(
            <div className="card bg-dark h-100" key={ this.props.id } >
                <div className="card-body">
                    <h5 className="card-title text-primary">{ this.props.project.name }</h5>
                    <p className="card-text text-warning">{ this.props.project.description}</p>
                </div>
                <div className="card-footer">
                    {
                        languages.forEach( (lang, index) => (
                            <div className="card-text text-danger" key={index} onLoad={console.log(lang)}> { lang } </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ProjectCard;