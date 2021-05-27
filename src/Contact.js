import React from 'react'

function Contact() {
    return (
        <>
        <div id="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Contact me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group list-group-horizontal" id="socialMedia">
                            <li className="list-group-item">
                                <a href="mailto:joseph.horyza@outlook.com" target="_blank"><i className="bi bi-envelope-fill" /></a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.linkedin.com/in/joseph-horyza-a42b5720a/" target="_blank"><i className="bi bi-linkedin" /></a>
                            </li>
                            <li className="list-group-item">
                                <a href="https://github.com/JHoryza" target="_blank"><i className="bi bi-github" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="backToTop">
                    <div className="row">
                        <a href="#" id="backToTopBtn">
                            <i className="bi bi-arrow-up-square-fill" />
                            <br />
                            <span className="badge">Back to top</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </> 
    );
}

export default Contact