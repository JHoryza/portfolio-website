import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation.js';
import About from './About.js';
import CallToAction from './CallToAction.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <About />
                <CallToAction />
                <Projects />
                <Contact />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));