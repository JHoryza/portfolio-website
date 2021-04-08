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
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eveniet commodi reprehenderit,
                        unde
                        laborum dignissimos voluptatibus cumque neque dolorem assumenda dicta impedit doloremque
                        repellat minus quia debitis quasi consequatur pariatur.</p>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <i className="bi bi-stack"> Java</i>
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-stack"> Android</i>
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-stack"> Web Front-end</i>
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