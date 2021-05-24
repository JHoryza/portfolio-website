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
                        <div className="row">
                            <a href="">Click here to see more...</a>
                            <div className="col-4">
                                <a class="btn" href={this.props.repo} target="_blank" role="button">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard