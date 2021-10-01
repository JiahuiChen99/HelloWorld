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
            <div className="card bg-dark h-100 project-card" key={ this.props.id } >
                <div className="card-body">
                    <h5 className="card-title font-weight-bold text-center">
                        <span className="project-card-link" onClick={ () => window.open(this.props.project.html_url)}>
                            { this.props.project.name }
                        </span>
                    </h5>
                    <p className="card-text text-justify ">{ this.props.project.description}</p>
                </div>
                <div className="card-footer">
                    {
                        languages.forEach( (lang, index) => (
                            <div className="card-text text-danger" key={index} > { lang } </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ProjectCard;