import React from 'react'
import { render } from 'react-dom';

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="card" style={{ backgroundImage: `url(${this.props.img})` }}>
                <div className="card-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>{this.props.name}</h3>
                                {this.props.tags.map((tag) => (
                                    <span class="badge bg-secondary">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12 text-center">
                                <a class="btn" href={this.props.repo} target="_blank" role="button">GitHub Repository</a>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12 text-center">
                                {this.props.demo === "" ? <></> : <a class="btn" href={this.props.demo} target="_blank" role="button">{this.props.demoText}</a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard