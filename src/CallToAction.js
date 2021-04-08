import React from 'react'

function CallToAction() {
    return (
        <div id="cta">
            <div className="container-fluid">
                <div className="row">
                    <form className="form-inline">
                        <label>Want to work with me?</label>
                        <a href="#contact"><input type="button" value="Let's Chat" className="btn" /></a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CallToAction