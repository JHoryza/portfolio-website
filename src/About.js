import React from 'react'

function About() {
    return (
        <div id="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 offset-2">
                        <img src="img/portrait.png" />
                    </div>
                    <div className="col-md-5">
                        <h1>About me</h1>
                        <h6><i>Creative minded. Self-driven. Team player.</i></h6>
                        <p>I am a software developer motivated by a chance to create, solve challenging problems, and learn new technologies. My formal education is in Computer Science and I have a professional background in Industrial Engineering. Solving problems and implementing logic driven solutions has been my work for the last three years. Now I am channeling that experience as I make the transition into the software industry. </p>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <i className="bi bi-stack"> Java</i>
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-stack"> Android</i>
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-stack"> HTML/CSS/JS</i>
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-stack"> SQL</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About