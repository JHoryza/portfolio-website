import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <h1>Contact me</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email address</label>
                                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="messageInput">Message</label>
                                <textarea type="text" className="form-control" id="messageInput" placeholder="Write your message" />
                            </div>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <i className="bi bi-linkedin" />
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-github" />
                            </li>
                            <li className="list-group-item">
                                <i className="bi bi-twitter" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="backToTop">
                    <div className="row">
                        <a href="#">
                            <i className="bi bi-arrow-up-square-fill" />
                            <br />
                            <span className="badge">Back to top</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact