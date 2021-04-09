import React from 'react'

function Home() {
    return (
        <div className="bg-image d-flex justify-content-center align-items-center home-bg">
            <div id="home">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="row">
                            <img src="img/portrait.png" />
                        </div>
                        <div className="row">
                            <h1>JOSEPH HORYZA</h1>
                        </div>
                        <div className="row">
                            <h2>I AM A <span className="txt-rotate" data-period="2000"
                                data-rotate='[ "JAVA DEVELOPER", "MOBILE DEVELOPER", "WEB DEVELOPER"]'></span></h2>
                        </div>
                        <div className="row">
                            <a href="#about">
                                <i className="bi bi-arrow-down-square-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home